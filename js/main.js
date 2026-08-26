/* ==========================================================================
   JADE — main.js
   Menú responsive, revelado al hacer scroll, contador de estadísticas,
   formulario de contacto (demo) y copyright automático.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------- Menú responsive ---------------- */
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    });

    mainNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menú');
      });
    });
  }

  /* ---------------- Marcar secciones para revelar ---------------- */
  const revealTargets = document.querySelectorAll(
    '.service-card, .collection-card, .process-step, .about-copy, .about-stats, .contact-copy, .contact-form, .cta-inner'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  revealTargets.forEach(el => revealObserver.observe(el));

  /* ---------------- Contador de estadísticas ---------------- */
  const statNumbers = document.querySelectorAll('.stat-number');

  const animateCount = (el) => {
    const target = parseInt(el.dataset.target, 10) || 0;
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * target);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => statsObserver.observe(el));

  /* ---------------- Formulario de contacto (demo, sin backend) ---------------- */
  const form = document.getElementById('contact-form');
  const confirmation = document.getElementById('form-confirmation');

  if (form && confirmation) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        confirmation.style.color = 'var(--c-garnet-lt, #a8394f)';
        confirmation.textContent = 'Por favor completa todos los campos.';
        return;
      }

      // Demostración sin backend: simplemente confirmamos al usuario.
      confirmation.style.color = 'var(--c-emerald, #2f9166)';
      confirmation.textContent = `Gracias, ${name}. Hemos recibido tu mensaje y te contactaremos pronto a ${email}.`;
      form.reset();
    });
  }

  /* ---------------- Copyright automático ---------------- */
  const footerCopy = document.getElementById('footer-copy');
  if (footerCopy) {
    const year = new Date().getFullYear();
    footerCopy.textContent = `© ${year} Jade Joyería. Todos los derechos reservados.`;
  }

});
