// ===================================
// Mobile Navigation Toggle
// ===================================

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// ===================================
// Smooth Scroll for Anchor Links
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Skip if it's just "#"
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update focus for accessibility
      target.focus();
    }
  });
});

// ===================================
// Intersection Observer for Animations
// ===================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.service-card, .case-study-card, .stat').forEach(el => {
  observer.observe(el);
});

// ===================================
// Performance: Lazy Load Images
// ===================================

if ('loading' in HTMLImageElement.prototype) {
  // Browser supports native lazy loading
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src || img.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// ===================================
// Accessibility: Skip Link Focus
// ===================================

const skipLink = document.querySelector('.skip-link');
if (skipLink) {
  skipLink.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(skipLink.getAttribute('href'));
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus();
      target.addEventListener('blur', () => {
        target.removeAttribute('tabindex');
      }, { once: true });
    }
  });
}

// ===================================
// Performance: Preload Critical Resources
// ===================================

// Preload hero image for faster LCP
const heroImage = document.querySelector('.hero-image img');
if (heroImage && heroImage.dataset.src) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = heroImage.dataset.src;
  document.head.appendChild(link);
}

// ===================================
// Analytics Helper (placeholder)
// ===================================

function trackEvent(category, action, label) {
  // Replace with your analytics implementation
  // Example: Google Analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      'event_category': category,
      'event_label': label
    });
  }
  
  // Example: Plausible Analytics
  if (typeof plausible !== 'undefined') {
    plausible(action, { props: { category, label } });
  }
  
  console.log('Event tracked:', { category, action, label });
}

// Track CTA clicks
document.querySelectorAll('.cta-button, .cta-button-large').forEach(button => {
  button.addEventListener('click', () => {
    trackEvent('CTA', 'click', button.textContent.trim());
  });
});

// ===================================
// Console Message (optional)
// ===================================

console.log('%c👋 Built with care', 'font-size: 16px; font-weight: bold; color: #0176D3;');
console.log('%cInterested in how this was built? Check out the code!', 'font-size: 12px; color: #666;');
