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

  function attachLiveValidation(fieldId, validator) {
    var field = document.getElementById(fieldId);
    if (!field) return;
    field.addEventListener('input', function () {
      if (validator(field.value)) {
        clearError(fieldId);
      }
    });
  }

   function showModal(overlayId) {
    var overlay = document.getElementById(overlayId);
    if (overlay) {
      overlay.classList.add('active');
      // Foca no botão de fechar para acessibilidade
      var closeBtn = overlay.querySelector('.modal-close');
      if (closeBtn) closeBtn.focus();
    }
  }

  function closeModal(overlayId) {
    var overlay = document.getElementById(overlayId);
    if (overlay) overlay.classList.remove('active');
  }

  // Fecha modais com ESC
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(function (modal) {
        modal.classList.remove('active');
      });
    }
  });

  // Fecha ao clicar no overlay (fora do box)
  document.querySelectorAll('.modal-overlay').forEach(function (overlay) {
    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });

  // Botões fechar modal
  document.querySelectorAll('.modal-close').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var overlay = btn.closest('.modal-overlay');
      if (overlay) overlay.classList.remove('active');
    });
  });

  // ----------------------------------------
  // FORMULÁRIO DE CONTATO
  // ----------------------------------------
  var formContato = document.getElementById('form-contato');

  if (formContato) {

    // Validação ao vivo
    attachLiveValidation('contato-nome',      function (v) { return v.trim().length >= 2; });
    attachLiveValidation('contato-email',     function (v) { return isValidEmail(v); });
    attachLiveValidation('contato-assunto',   function (v) { return v !== ''; });
    attachLiveValidation('contato-mensagem',  function (v) { return v.trim().length >= 20; });

    formContato.addEventListener('submit', function (event) {
      event.preventDefault();

      clearAllErrors(formContato);

      var nome     = document.getElementById('contato-nome');
      var email    = document.getElementById('contato-email');
      var assunto  = document.getElementById('contato-assunto');
      var mensagem = document.getElementById('contato-mensagem');
      var valid    = true;

      if (!nome || nome.value.trim().length < 2) {
        showError('contato-nome', 'Informe seu nome completo (mínimo 2 caracteres).');
        valid = false;
      }

      if (!email || !isValidEmail(email.value)) {
        showError('contato-email', 'Informe um endereço de e-mail válido.');
        valid = false;
      }

      if (!assunto || assunto.value === '') {
        showError('contato-assunto', 'Selecione um assunto.');
        valid = false;
      }

      if (!mensagem || mensagem.value.trim().length < 20) {
        showError('contato-mensagem', 'A mensagem deve ter pelo menos 20 caracteres.');
        valid = false;
      }

      if (!valid) {
        // Foca no primeiro campo com erro
        var firstError = formContato.querySelector('.form-control.error');
        if (firstError) firstError.focus();
        return;
      }

      // Simula envio — exibe modal de sucesso
      showModal('modal-contato');
      formContato.reset();
    });
  }
});