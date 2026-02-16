/**
 * Zenith Tech Works — Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile Navigation Toggle ---
  var menuToggle = document.getElementById('menuToggle');
  var navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  }

  // --- Header scroll effect ---
  var header = document.getElementById('header');

  if (header && !header.classList.contains('solid')) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // --- Scroll-triggered fade-in animations ---
  var animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

  if (animatedElements.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -30px 0px'
    });

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything immediately
    animatedElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // --- Animated stat counters ---
  var statNumbers = document.querySelectorAll('.stat-number[data-target]');

  if (statNumbers.length > 0 && 'IntersectionObserver' in window) {
    var statsObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(function (el) {
      statsObserver.observe(el);
    });
  }

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute('data-target'));
    var suffix = el.getAttribute('data-suffix') || '+';
    var isDecimal = String(target).indexOf('.') !== -1;
    var duration = 2000;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = eased * target;

      if (isDecimal) {
        el.textContent = current.toFixed(1);
      } else {
        el.textContent = Math.floor(current);
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        if (isDecimal) {
          el.textContent = target.toFixed(1) + suffix;
        } else {
          el.textContent = target + suffix;
        }
      }
    }

    requestAnimationFrame(step);
  }

  // --- Contact form handling ---
  var contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var submitBtn = contactForm.querySelector('button[type="submit"]');
      var originalText = submitBtn.textContent;

      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // Simulate form submission
      setTimeout(function () {
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.background = '#00c9a7';
        submitBtn.style.borderColor = '#00c9a7';
        submitBtn.style.color = '#0d1b2a';
        contactForm.reset();

        setTimeout(function () {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
          submitBtn.style.borderColor = '';
          submitBtn.style.color = '';
        }, 3000);
      }, 1500);
    });
  }

  // --- Newsletter form ---
  var newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input');
      var btn = form.querySelector('button');
      if (input && input.value) {
        var origHTML = btn.innerHTML;
        btn.innerHTML = '&#10003;';
        input.value = '';
        setTimeout(function () {
          btn.innerHTML = origHTML;
        }, 2000);
      }
    });
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        var headerHeight = header ? header.offsetHeight : 0;
        var targetPos = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  // --- Handle anchor scrolling from other pages ---
  if (window.location.hash) {
    setTimeout(function () {
      var targetEl = document.querySelector(window.location.hash);
      if (targetEl) {
        var headerHeight = header ? header.offsetHeight : 0;
        var targetPos = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    }, 300);
  }

});
