// Client-side validation mirroring the original zod schema.
// NOTE: submission backend is not wired up yet (contact form is secondary
// for this iteration) — a successful validation currently just shows the
// success message locally without sending data anywhere.

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

    // TODO: wire this up to a real backend (form submissions aren't sent anywhere yet).
    window.setTimeout(function () {
      submitButton.disabled = false;
      submitButton.textContent = 'Send';
      status.textContent = 'Thanks — your message has been received.';
      status.className = 'form-status success';
      form.reset();
    }, 400);
  });
})();
