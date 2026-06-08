document.addEventListener('DOMContentLoaded', function () {


  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  function showError(fieldId, message) {
    var field = document.getElementById(fieldId);
    var errorEl = document.getElementById(fieldId + '-error');
    if (field) field.classList.add('error');
    if (errorEl) errorEl.textContent = message;
  }

  function clearError(fieldId) {
    var field = document.getElementById(fieldId);
    var errorEl = document.getElementById(fieldId + '-error');
    if (field) field.classList.remove('error');
    if (errorEl) errorEl.textContent = '';
  }

  function clearAllErrors(form) {
    form.querySelectorAll('.form-control').forEach(function (field) {
      field.classList.remove('error');
    });
    form.querySelectorAll('.form-error').forEach(function (el) {
      el.textContent = '';
    });
  }

  // Limpa erro ao digitar
  function attachLiveValidation(fieldId, validator) {
    var field = document.getElementById(fieldId);
    if (!field) return;
    field.addEventListener('input', function () {
      if (validator(field.value)) {
        clearError(fieldId);
      }
    });
  }
});