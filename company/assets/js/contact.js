// Client-side validation mirroring the original zod schema, then POSTs to
// the contact-worker Cloudflare Worker (see /contact-worker) which
// re-validates, sanitizes, logs to R2, and emails a notification.

(function () {
  var form = document.querySelector('[data-contact-form]');
  if (!form) return;

  var status = form.querySelector('[data-form-status]');
  var submitButton = form.querySelector('[data-submit-button]');

  var rules = {
    name: { required: true, maxLength: 100, message: 'Enter your name.' },
    email: { required: true, maxLength: 255, email: true, message: 'Enter a valid work email.' },
    company: { required: false, maxLength: 150 },
    message: { required: true, maxLength: 2000, message: 'Tell us what you are building.' },
  };

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var CONTACT_ENDPOINT = '/api/contact';

  function fieldError(name, rawValue) {
    var rule = rules[name];
    var value = (rawValue || '').trim();

    if (rule.required && value.length === 0) return rule.message;
    if (rule.maxLength && value.length > rule.maxLength) {
      return name.charAt(0).toUpperCase() + name.slice(1) + ' must be ' + rule.maxLength + ' characters or fewer.';
    }
    if (rule.email && value.length > 0 && !emailPattern.test(value)) return rule.message;
    return null;
  }

  function setFieldError(name, message) {
    var errorEl = form.querySelector('[data-error-for="' + name + '"]');
    var inputEl = form.querySelector('[name="' + name + '"]');
    if (!errorEl || !inputEl) return;

    if (message) {
      errorEl.textContent = message;
      errorEl.hidden = false;
      inputEl.setAttribute('aria-invalid', 'true');
    } else {
      errorEl.textContent = '';
      errorEl.hidden = true;
      inputEl.removeAttribute('aria-invalid');
    }
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var honeypot = form.querySelector('[name="website"]');
    if (honeypot && honeypot.value.length > 0) {
      // Silently "succeed" for bots without doing anything.
      status.textContent = 'Thanks — your message has been received.';
      status.className = 'form-status success';
      form.reset();
      return;
    }

    var data = new FormData(form);
    var hasError = false;

    Object.keys(rules).forEach(function (name) {
      var message = fieldError(name, data.get(name));
      setFieldError(name, message);
      if (message) hasError = true;
    });

    if (hasError) {
      status.textContent = '';
      status.className = 'form-status';
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = 'Sending…';
    status.textContent = '';
    status.className = 'form-status';

    fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.get('name'),
        email: data.get('email'),
        company: data.get('company'),
        message: data.get('message'),
        website: honeypot ? honeypot.value : '',
      }),
    })
      .then(function (response) {
        return response.json().then(function (payload) {
          return { status: response.status, payload: payload };
        });
      })
      .then(function (result) {
        submitButton.disabled = false;
        submitButton.textContent = 'Send';

        if (result.payload && result.payload.ok) {
          status.textContent = 'Thanks — your message has been received.';
          status.className = 'form-status success';
          form.reset();
          return;
        }

        if (result.status === 400 && result.payload && result.payload.errors) {
          Object.keys(result.payload.errors).forEach(function (name) {
            setFieldError(name, result.payload.errors[name]);
          });
          status.textContent = '';
          status.className = 'form-status';
          return;
        }

        status.textContent = 'Something went wrong — please email hello@vmugdha.in directly.';
        status.className = 'form-status error';
      })
      .catch(function () {
        submitButton.disabled = false;
        submitButton.textContent = 'Send';
        status.textContent = 'Something went wrong — please email hello@vmugdha.in directly.';
        status.className = 'form-status error';
      });
  });
})();
