/**
 * SAFFRON TABLE - MODERN LUXURY ANIMATIONS
 * Cursor-based parallax, minimal animations, premium interactions
 */

// ============================================
// CURSOR-BASED BACKGROUND PARALLAX
// ============================================

export function initCursorParallax() {
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    targetX = (mouseX / window.innerWidth - 0.5) * 6;
    targetY = (mouseY / window.innerHeight - 0.5) * 6;
  });

  // Apply parallax to sections with data-parallax attribute
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  function animate() {
    parallaxElements.forEach((element) => {
      const el = element as HTMLElement;
      el.style.transform = `translate(${targetX}px, ${targetY}px)`;
    });
    requestAnimationFrame(animate);
  }

  animate();
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

export function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    '.dish-card, .gallery-item, .testimonial-card, .section-header'
  );

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((element) => {
    observer.observe(element);
  });
}

// ============================================
// CUSTOM CURSOR MANAGEMENT
// ============================================

export function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor') as HTMLElement;
  if (!cursor) return;

  const interactiveElements = document.querySelectorAll(
    'a, button, .dish-card, .gallery-item, .cta-button, .nav-links a'
  );

  interactiveElements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
    });

    element.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  });
}

// ============================================
// HOVER EFFECTS ON INTERACTIVE ELEMENTS
// ============================================

export function initHoverEffects() {
  const images = document.querySelectorAll('.dish-image img, .gallery-item img');
  
  images.forEach((img) => {
    img.addEventListener('mouseenter', function (this: HTMLElement) {
      this.style.transform = 'scale(1.05)';
    });

    img.addEventListener('mouseleave', function (this: HTMLElement) {
      this.style.transform = 'scale(1)';
    });
  });
}

// ============================================
// SMOOTH PAGE TRANSITIONS
// ============================================

export function initSmoothTransitions() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// ============================================
// FORM INTERACTIONS
// ============================================

export function initFormInteractions() {
  const form = document.querySelector('.reservation-form') as HTMLFormElement;
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Show success message
    alert(`Thank you for your reservation request! We'll contact you at ${data.email} to confirm.`);
    form.reset();
  });

  // Add focus effects to form inputs
  const inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach((input) => {
    input.addEventListener('focus', function (this: HTMLElement) {
      this.parentElement?.classList.add('focused');
    });

    input.addEventListener('blur', function (this: HTMLElement) {
      this.parentElement?.classList.remove('focused');
    });
  });
}

// ============================================
// NAVIGATION HIGHLIGHT ON SCROLL
// ============================================

export function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observerOptions = {
    threshold: 0.3,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
}

// ============================================
// LAZY LOADING IMAGES
// ============================================

export function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

export function initNavbarScroll() {
  const navbar = document.querySelector('.navbar') as HTMLElement;
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ============================================
// INITIALIZE ALL ANIMATIONS
// ============================================

export function initializeAnimations() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupAnimations();
    });
  } else {
    setupAnimations();
  }
}

function setupAnimations() {
  initCursorParallax();
  initScrollReveal();
  initCustomCursor();
  initHoverEffects();
  initSmoothTransitions();
  initFormInteractions();
  initNavHighlight();
  initLazyLoading();
  initNavbarScroll();
}
