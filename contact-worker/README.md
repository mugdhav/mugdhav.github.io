# vmugdha-contact-worker

Backend for `company/contact.html`'s contact form. Receives the POST from
`company/assets/js/contact.js`, validates/sanitizes it server-side, appends a
row to a CSV kept in a private R2 bucket, and emails a notification to
`hello@vmugdha.in` via Cloudflare Email Sending.

## One-time setup

```bash
cd contact-worker
npm run setup
```

Runs `scripts/setup.sh`: installs dependencies, logs in to Cloudflare if
needed (`wrangler login`), creates the private R2 bucket
(`vmugdha-contact-submissions`) if it doesn't already exist, and onboards
`vmugdha.in` for Email Sending if it isn't already enabled. Safe to re-run —
each step is skipped if already done. If the email step prints DNS records to
add, add them in the Cloudflare dashboard before real notifications can send
(the R2 CSV logging works regardless).

## Deploy

```bash
npm run deploy
```

Runs `scripts/deploy.sh` (`wrangler deploy`), which also registers the route
from `wrangler.jsonc` (`www.vmugdha.in/api/contact`) — no separate DNS record
is needed, since the zone must already be proxied through Cloudflare for
email sending to work.

Or do both in one go: `npm run release`.

## Local development

```bash
npx wrangler dev
```

Test with, e.g.:

```bash
curl -X POST http://localhost:8787/ \
  -H 'Content-Type: application/json' \
  -d '{"name":"Test User","email":"test@example.com","company":"Acme","message":"Hello!","website":""}'
```

## Checking stored submissions

```bash
npx wrangler r2 object get vmugdha-contact-submissions/contact-submissions.csv --file=submissions.csv
```

## Notes

- No secrets are required — both the R2 and `send_email` bindings are plain
  Worker bindings, not API tokens.
- The R2 read-modify-write in `appendToCsv` is not atomic. That's fine for a
  low-volume contact form; if concurrent submissions ever become a real risk,
  switch to one object per submission instead of a single growing file.
- If email delivery fails, the submission is still saved to R2 — check
  `wrangler tail` for the logged error.
