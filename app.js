// Wait for both DOM and scripts to be fully loaded
window.addEventListener('load', () => {
  try {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    } else {
      console.error('Lucide is not loaded properly');
    }

    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    let isMenuOpen = false;

    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle('hidden');
        
        // Update menu icon
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
          icon.setAttribute('data-lucide', isMenuOpen ? 'x' : 'menu');
          lucide.createIcons();
        }
      });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
          // Close mobile menu if open
          if (isMenuOpen && mobileMenu) {
            isMenuOpen = false;
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
              icon.setAttribute('data-lucide', 'menu');
              lucide.createIcons();
            }
          }
        }
      });
    });

    // Animation on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.feature-card, .pricing-card');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };

    // Initial styles for animation
    document.querySelectorAll('.feature-card, .pricing-card').forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'all 0.6s ease-out';
    });

    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
    // Initial check for elements in view
    animateOnScroll();
  } catch (error) {
    console.error('Error initializing the application:', error);
  }
});