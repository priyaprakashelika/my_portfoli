// script.js - mobile nav, sticky header, form validation, smooth scroll, scroll-to-top

document.addEventListener('DOMContentLoaded', function () {

    /* NAV TOGGLE (mobile) */
    const navToggleButtons = document.querySelectorAll('.nav-toggle');
    navToggleButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        document.body.classList.toggle('mobile-nav-open');
        // animate hamburger
        btn.classList.toggle('open');
      });
    });
  
    /* STICKY HEADER - change bg after scroll */
    const header = document.getElementById('site-header') || document.querySelector('.header');
    const stickyThreshold = 60;
    window.addEventListener('scroll', () => {
      if (window.scrollY > stickyThreshold) header.classList.add('sticky');
      else header.classList.remove('sticky');
  
      // scroll top button visibility
      const scrollTopBtn = document.getElementById('scrollTop');
      if (!scrollTopBtn) return;
      if (window.scrollY > 300) scrollTopBtn.style.display = 'block';
      else scrollTopBtn.style.display = 'none';
    });
  
    /* SMOOTH SCROLL for anchor links (internal pages) */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    /* SCROLL TO TOP */
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
  
    /* CONTACT FORM (simple front-end validation + faux submit) */
    const form = document.getElementById('contactForm');
    if (form) {
      const formMsg = document.getElementById('formMsg');
      form.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const message = form.querySelector('#message').value.trim();
  
        // Basic validation
        if (!name || !email || !message) {
          formMsg.textContent = 'Please fill all fields.';
          formMsg.style.color = '#b91c1c';
          return;
        }
        // basic email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          formMsg.textContent = 'Please enter a valid email address.';
          formMsg.style.color = '#b91c1c';
          return;
        }
  
        // simulate send (client-side only)
        formMsg.style.color = '#0f766e';
        formMsg.textContent = 'Sending...';
  
        // Simulate network latency then show success
        setTimeout(() => {
          formMsg.textContent = 'Thanks! Your message was sent. We will respond in 1-2 business days.';
          form.reset();
        }, 900);
      });
    }
  
    /* Close mobile nav when clicking outside */
    document.addEventListener('click', (e) => {
      if (!document.body.classList.contains('mobile-nav-open')) return;
      const headerEl = document.querySelector('.header-inner');
      if (!headerEl.contains(e.target)) {
        document.body.classList.remove('mobile-nav-open');
      }
    });
  
  });