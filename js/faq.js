document.addEventListener('DOMContentLoaded', function () {

  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    var answer   = item.querySelector('.faq-answer');

    if (!question || !answer) return;

    
    function getAnswerHeight() {
      var inner = answer.querySelector('.faq-answer-inner');
      return inner ? inner.scrollHeight + 32 : 0; // +32 de padding
    }

    question.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');

      
      var parentList = item.closest('.faq-list');
      if (parentList) {
        parentList.querySelectorAll('.faq-item.open').forEach(function (openItem) {
          if (openItem !== item) {
            openItem.classList.remove('open');
            openItem.querySelector('.faq-answer').style.maxHeight = '0';
            openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          }
        });
      }

      
      if (isOpen) {
        item.classList.remove('open');
        answer.style.maxHeight = '0';
        question.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        answer.style.maxHeight = getAnswerHeight() + 'px';
        question.setAttribute('aria-expanded', 'true');
      }
    });

    
    question.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        question.click();
      }
    });

    
    answer.style.maxHeight = '0';
    question.setAttribute('aria-expanded', 'false');
  });


  var hash = window.location.hash;
  if (hash) {
    var target = document.querySelector(hash);
    if (target && target.classList.contains('faq-item')) {
      target.querySelector('.faq-question').click();
      setTimeout(function () {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 150);
    }
  }

});