// Navigation functionality
function initializeNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('nav.sidebar');
  const navLinks = document.querySelectorAll('nav.sidebar a');

  // Hamburger menu toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', sidebar.classList.contains('open'));
  });

  hamburger.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      hamburger.click();
    }
  });

  // Navigation link active state
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      // Add active class to clicked link
      e.target.classList.add('active');
      
      // Close mobile menu if open
      if (window.innerWidth <= 1024) {
        hamburger.classList.remove('active');
        sidebar.classList.remove('open');
      }
    });
  });

  // Update active nav on scroll
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollTop = window.pageYOffset;

    sections.forEach(section => {
      const offset = section.offsetTop - 100;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const navLink = document.querySelector(`nav.sidebar a[href="#${id}"]`);

      if (scrollTop >= offset && scrollTop < offset + height) {
        navLinks.forEach(l => l.classList.remove('active'));
        if (navLink) navLink.classList.add('active');
      }
    });
  });
}

// Dark mode functionality
function initializeDarkMode() {
  const darkmodeBtn = document.getElementById('darkmode-btn');
  
  // Check for saved dark mode preference
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'true') {
    document.body.classList.add('darkmode');
    darkmodeBtn.textContent = '☀️';
  }

  darkmodeBtn.addEventListener('click', () => {
    document.body.classList.toggle('darkmode');
    const isDarkMode = document.body.classList.contains('darkmode');
    
    // Update button text
    darkmodeBtn.textContent = isDarkMode ? '☀️' : '🌙';
    
    // Save preference
    localStorage.setItem('darkMode', isDarkMode);
  });
}

// Smooth animations for glassmorphism cards
function initializeAnimations() {
  const cards = document.querySelectorAll('.glass-card');
  
  // Intersection Observer for fade-in animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}

// Enhanced glassmorphism effects
function initializeGlassmorphism() {
  const glassElements = document.querySelectorAll('.glass-card, .sidebar, .darkmode-toggle');
  
  glassElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.transform = 'translateY(-2px) scale(1.02)';
      element.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)';
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.transform = '';
      element.style.boxShadow = '';
    });
  });
}

// Color palette interactive effects
function initializeColorPalette() {
  const colorSwatches = document.querySelectorAll('.color-swatch');
  
  colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      const colorValue = swatch.style.backgroundColor;
      
      // Copy to clipboard if available
      if (navigator.clipboard) {
        const hexValue = swatch.querySelector('.color-hex').textContent;
        navigator.clipboard.writeText(hexValue).then(() => {
          // Show feedback
          const originalText = swatch.querySelector('.color-name').textContent;
          swatch.querySelector('.color-name').textContent = 'Copied!';
          setTimeout(() => {
            swatch.querySelector('.color-name').textContent = originalText;
          }, 1000);
        });
      }
    });
    
    swatch.style.cursor = 'pointer';
    swatch.title = 'Click to copy color code';
  });
}

// Parallax effect for hero section
function initializeParallax() {
  const heroSection = document.querySelector('.hero-section');
  
  if (heroSection) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      heroSection.style.transform = `translateY(${rate}px)`;
    });
  }
}

// Responsive image loading
function initializeImageLoading() {
  const images = document.querySelectorAll('img[src*="assets/visuals"]');
  
  images.forEach(img => {
    img.addEventListener('error', () => {
      // Fallback for missing images
      img.style.display = 'none';
      const placeholder = document.createElement('div');
      placeholder.className = 'image-placeholder';
      placeholder.textContent = 'Chart visualization';
      placeholder.style.cssText = `
        height: 200px;
        background: linear-gradient(135deg, var(--apple-blue), var(--apple-green));
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 600;
      `;
      img.parentNode.insertBefore(placeholder, img);
    });
  });
}

// Contact link analytics (optional)
function initializeContactTracking() {
  const contactLinks = document.querySelectorAll('.contact-link');
  
  contactLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Add tracking logic here if needed
      console.log(`Contact link clicked: ${link.textContent.trim()}`);
    });
  });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
  initializeDarkMode();
  initializeAnimations();
  initializeGlassmorphism();
  initializeColorPalette();
  initializeParallax();
  initializeImageLoading();
  initializeContactTracking();
  
  // Add smooth scrolling behavior
  document.documentElement.style.scrollBehavior = 'smooth';
  
  console.log('Apple Inc. FY2025 Strategy website initialized successfully! 🍎');
});

// Handle resize events
window.addEventListener('resize', () => {
  // Close mobile menu on resize to desktop
  if (window.innerWidth > 1024) {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('nav.sidebar');
    
    hamburger.classList.remove('active');
    sidebar.classList.remove('open');
  }
});

// Add loading state management
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Remove any loading indicators
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 300);
  }
});
