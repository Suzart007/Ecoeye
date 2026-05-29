document.addEventListener('DOMContentLoaded', function () {


  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {

    navToggle.addEventListener('click', function () {
      const isOpen = navMenu.classList.contains('open');

      navMenu.classList.toggle('open');
      navToggle.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(!isOpen));
    });

    
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    
    document.addEventListener('click', function (event) {
      const clickedOutside =
        !navMenu.contains(event.target) &&
        !navToggle.contains(event.target);

      if (clickedOutside && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
    }
});    