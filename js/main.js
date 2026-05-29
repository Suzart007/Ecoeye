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


  const navbar = document.querySelector('.navbar');

  if (navbar) {
    function handleNavbarScroll() {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll(); 
  }


  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  var allNavLinks = document.querySelectorAll('.nav-link');

  allNavLinks.forEach(function (link) {
    var linkFile = link.getAttribute('href').split('/').pop();

    
    link.classList.remove('active');

    
    if (linkFile === currentPath) {
      link.classList.add('active');
    }

    
    if (currentPath === '' && linkFile === 'index.html') {
      link.classList.add('active');
    }
  });


  var btnScrollTop = document.getElementById('btn-scroll-top');

  if (btnScrollTop) {
    function handleScrollTopVisibility() {
      if (window.scrollY > 300) {
        btnScrollTop.classList.add('visible');
      } else {
        btnScrollTop.classList.remove('visible');
      }
    }

    window.addEventListener('scroll', handleScrollTopVisibility, { passive: true });
    handleScrollTopVisibility();

    btnScrollTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  var fadeElements = document.querySelectorAll('.fade-in-element');

  if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
    var fadeObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target); 
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    fadeElements.forEach(function (el) {
      
      if (el.classList.contains('visible')) return;
      fadeObserver.observe(el);
    });

  } else {
    
    fadeElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }


  var gridCards = document.querySelectorAll('.grid-3 .fade-in-element, .grid-4 .fade-in-element, .grid-2 .fade-in-element');
  gridCards.forEach(function (card, index) {
    card.style.transitionDelay = (index * 0.1) + 's';
  });

});