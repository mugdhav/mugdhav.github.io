// Backend for company/contact.html — validates, sanitizes, logs to a private
// R2 CSV, and emails a notification. See contact-worker/README.md for setup.

export interface Env {
  CSV: R2Bucket;
  EMAIL: SendEmail;
}

const CSV_KEY = 'contact-submissions.csv';
const CSV_HEADER = 'timestamp,name,email,company,message';
const NOTIFY_TO = 'hello@vmugdha.in';
const NOTIFY_FROM = 'noreply@vmugdha.in';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldName = 'name' | 'email' | 'company' | 'message';

interface FieldRule {
  required: boolean;
  maxLength: number;
  email?: boolean;
  message: string;
}

const RULES: Record<FieldName, FieldRule> = {
  name: { required: true, maxLength: 100, message: 'Enter your name.' },
  email: { required: true, maxLength: 255, email: true, message: 'Enter a valid work email.' },
  company: { required: false, maxLength: 150, message: 'Company must be 150 characters or fewer.' },
  message: { required: true, maxLength: 2000, message: 'Tell us what you are building.' },
};

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

// Strips control characters (keeps \n when allowed) — blocks header/row injection.
function stripControlChars(value: string, allowNewline: boolean): string {
  let out = '';
  for (const ch of value) {
    const code = ch.codePointAt(0) ?? 0;
    if (code === 0x0a && allowNewline) {
      out += ch;
      continue;
    }
    if (code <= 0x1f || code === 0x7f) continue;
    out += ch;
  }
  return out;
}

function sanitizeField(raw: unknown, allowNewline: boolean): string {
  const value = typeof raw === 'string' ? raw : '';
  const normalized = value.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  return stripControlChars(normalized, allowNewline).trim();
}

function validate(fields: Record<FieldName, string>): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};
  (Object.keys(RULES) as FieldName[]).forEach((name) => {
    const rule = RULES[name];
    const value = fields[name];
    if (rule.required && value.length === 0) {
      errors[name] = rule.message;
      return;
    }
    if (value.length > rule.maxLength) {
      errors[name] = `${name.charAt(0).toUpperCase()}${name.slice(1)} must be ${rule.maxLength} characters or fewer.`;
      return;
    }
    if (rule.email && value.length > 0 && !EMAIL_PATTERN.test(value)) {
      errors[name] = rule.message;
    }
  });
  return errors;
}

// Guards against CSV formula injection (=, +, -, @, tab) when opened in Excel/Sheets,
// then applies RFC 4180 escaping.
function csvField(value: string): string {
  let field = value;
  if (/^[=+\-@\t]/.test(field)) {
    field = `'${field}`;
  }
  if (/[",\n]/.test(field)) {
    field = `"${field.replace(/"/g, '""')}"`;
  }
  return field;
}

function htmlEscape(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function appendToCsv(env: Env, row: string[]): Promise<void> {
  const existing = await env.CSV.get(CSV_KEY);
  const currentText = existing ? await existing.text() : `${CSV_HEADER}\n`;
  const line = row.map(csvField).join(',');
  const updated = currentText.endsWith('\n') ? `${currentText}${line}\n` : `${currentText}\n${line}\n`;
  await env.CSV.put(CSV_KEY, updated);
}

async function sendNotification(env: Env, fields: Record<FieldName, string>): Promise<void> {
  const text = [
    `New contact form submission from vmugdha.in/company:`,
    ``,
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Company: ${fields.company || '(not provided)'}`,
    ``,
    `Message:`,
    fields.message,
  ].join('\n');

  const html = `
    <p>New contact form submission from vmugdha.in/company:</p>
    <p>
      <strong>Name:</strong> ${htmlEscape(fields.name)}<br>
      <strong>Email:</strong> ${htmlEscape(fields.email)}<br>
      <strong>Company:</strong> ${htmlEscape(fields.company || '(not provided)')}
    </p>
    <p><strong>Message:</strong></p>
    <p>${htmlEscape(fields.message).replace(/\n/g, '<br>')}</p>
  `;

  await env.EMAIL.send({
    to: NOTIFY_TO,
    from: { email: NOTIFY_FROM, name: 'VMugdha Contact Form' },
    subject: `New contact form message from ${fields.name}`,
    text,
    html,
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== 'POST') {
      return jsonResponse({ ok: false, error: 'Method not allowed' }, 405);
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ ok: false, error: 'Invalid JSON' }, 400);
    }

    if (typeof body !== 'object' || body === null) {
      return jsonResponse({ ok: false, error: 'Invalid payload' }, 400);
    }

    const raw = body as Record<string, unknown>;

    // Honeypot: bots that fill this hidden field get a fake success, matching
    // the client-side behavior in contact.js, without being processed further.
    const honeypot = typeof raw.website === 'string' ? raw.website.trim() : '';
    if (honeypot.length > 0) {
      return jsonResponse({ ok: true }, 200);
    }

    const fields: Record<FieldName, string> = {
      name: sanitizeField(raw.name, false),
      email: sanitizeField(raw.email, false),
      company: sanitizeField(raw.company, false),
      message: sanitizeField(raw.message, true),
    };

    const errors = validate(fields);
    if (Object.keys(errors).length > 0) {
      return jsonResponse({ ok: false, errors }, 400);
    }

    try {
      await appendToCsv(env, [new Date().toISOString(), fields.name, fields.email, fields.company, fields.message]);
    } catch (err) {
      console.error('Failed to write contact submission to R2:', err);
      return jsonResponse({ ok: false, error: 'Could not save your message. Please try again.' }, 500);
    }

    try {
      await sendNotification(env, fields);
    } catch (err) {
      // The CSV write succeeded, so the submission is not lost — just log the
      // email failure for later inspection via `wrangler tail`.
      console.error('Failed to send contact notification email:', err);
    }

    return jsonResponse({ ok: true }, 200);
  },
};
