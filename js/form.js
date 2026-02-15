// ===================================
// Contact Form Handling
// ===================================

const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Add loading state
    contactForm.classList.add('loading');
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    try {
      // Replace with your actual endpoint
      // Options: Netlify Forms, Formspree, custom backend, etc.
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        // Show success message
        contactForm.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Track conversion
        trackEvent('Form', 'submit', 'Contact Form');
        
        // Optional: Reset form after delay
        setTimeout(() => {
          contactForm.reset();
        }, 2000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      // Show error message
      contactForm.classList.remove('loading');
      errorMessage.style.display = 'block';
      
      // Hide error after 5 seconds
      setTimeout(() => {
        errorMessage.style.display = 'none';
      }, 5000);
      
      console.error('Form submission error:', error);
    }
  });
}

// ===================================
// Form Validation
// ===================================

// Real-time email validation
const emailInput = document.getElementById('email');
if (emailInput) {
  emailInput.addEventListener('blur', () => {
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && !emailRegex.test(email)) {
      emailInput.setCustomValidity('Please enter a valid email address');
      emailInput.reportValidity();
    } else {
      emailInput.setCustomValidity('');
    }
  });
}

// Phone number formatting (US format)
const phoneInput = document.getElementById('phone');
if (phoneInput) {
  phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 0) {
      if (value.length <= 3) {
        value = `(${value}`;
      } else if (value.length <= 6) {
        value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
      } else {
        value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
      }
    }
    
    e.target.value = value;
  });
}

// ===================================
// Alternative: Netlify Forms Setup
// ===================================

// If using Netlify Forms, uncomment this and add data-netlify="true" to form
/*
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    contactForm.classList.add('loading');
    
    const formData = new FormData(contactForm);
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      
      if (response.ok) {
        contactForm.style.display = 'none';
        successMessage.style.display = 'block';
        trackEvent('Form', 'submit', 'Contact Form');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      contactForm.classList.remove('loading');
      errorMessage.style.display = 'block';
      setTimeout(() => errorMessage.style.display = 'none', 5000);
    }
  });
}
*/

// ===================================
// Alternative: Formspree Setup
// ===================================

// If using Formspree, replace the form action with your Formspree endpoint
// Example: <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
// Then use this simpler handler:
/*
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    contactForm.classList.add('loading');
    
    const formData = new FormData(contactForm);
    
    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        contactForm.style.display = 'none';
        successMessage.style.display = 'block';
        trackEvent('Form', 'submit', 'Contact Form');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      contactForm.classList.remove('loading');
      errorMessage.style.display = 'block';
      setTimeout(() => errorMessage.style.display = 'none', 5000);
    }
  });
}
*/
