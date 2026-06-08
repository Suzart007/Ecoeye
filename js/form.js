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

      var closeBtn = overlay.querySelector('.modal-close');
      if (closeBtn) closeBtn.focus();
    }
  }

  function closeModal(overlayId) {
    var overlay = document.getElementById(overlayId);
    if (overlay) overlay.classList.remove('active');
  }


  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(function (modal) {
        modal.classList.remove('active');
      });
    }
  });


  document.querySelectorAll('.modal-overlay').forEach(function (overlay) {
    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });


  document.querySelectorAll('.modal-close').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var overlay = btn.closest('.modal-overlay');
      if (overlay) overlay.classList.remove('active');
    });
  });


  var formContato = document.getElementById('form-contato');

  if (formContato) {


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

        var firstError = formContato.querySelector('.form-control.error');
        if (firstError) firstError.focus();
        return;
      }


      showModal('modal-contato');
      formContato.reset();
    });
  }
var formReportar = document.getElementById('form-reportar');

  if (formReportar) {

    attachLiveValidation('rep-regiao',    function (v) { return v !== ''; });
    attachLiveValidation('rep-descricao', function (v) { return v.trim().length >= 20; });
    attachLiveValidation('rep-local',     function (v) { return v.trim().length >= 3; });

    formReportar.addEventListener('submit', function (event) {
      event.preventDefault();

      clearAllErrors(formReportar);

      var tipo      = formReportar.querySelector('input[name="tipo-desastre"]:checked');
      var regiao    = document.getElementById('rep-regiao');
      var gravidade = formReportar.querySelector('input[name="gravidade"]:checked');
      var descricao = document.getElementById('rep-descricao');
      var local     = document.getElementById('rep-local');
      var valid     = true;

      if (!tipo) {
        var tipoError = document.getElementById('rep-tipo-error');
        if (tipoError) tipoError.textContent = 'Selecione o tipo de desastre.';
        valid = false;
      }

      if (!regiao || regiao.value === '') {
        showError('rep-regiao', 'Selecione a região afetada.');
        valid = false;
      }

      if (!gravidade) {
        var gravError = document.getElementById('rep-gravidade-error');
        if (gravError) gravError.textContent = 'Informe a gravidade percebida.';
        valid = false;
      }

      if (!descricao || descricao.value.trim().length < 20) {
        showError('rep-descricao', 'Descreva a ocorrência com pelo menos 20 caracteres.');
        valid = false;
      }

      if (!local || local.value.trim().length < 3) {
        showError('rep-local', 'Informe a localização (endereço ou referência).');
        valid = false;
      }

      if (!valid) {
        var firstError = formReportar.querySelector('.form-control.error');
        if (firstError) firstError.focus();
        return;
      }

      var protocolo = gerarProtocolo();
      var protocoloEl = document.getElementById('protocolo-numero');
      if (protocoloEl) protocoloEl.textContent = '#' + protocolo;

      showModal('modal-reportar');
      formReportar.reset();
    });
  }


  function gerarProtocolo() {
    var ano    = new Date().getFullYear();
    var aleatorio = Math.random().toString(36).substring(2, 10).toUpperCase();
    return 'AT-' + ano + '-' + aleatorio;
  }

});
