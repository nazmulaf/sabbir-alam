// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Auto-hide messages after 5 seconds
document.addEventListener('DOMContentLoaded', function() {
    const messages = document.querySelectorAll('.alert');
    if (messages.length > 0) {
        messages.forEach(message => {
            setTimeout(() => {
                message.style.opacity = '0';
                message.style.transform = 'translateX(400px)';
                setTimeout(() => message.remove(), 500);
            }, 5000);
        });
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');

    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 500);
    }

    if (heroVisual && scrolled < window.innerHeight) {
        heroVisual.style.transform = `translateY(${scrolled * 0.3}px) scale(${1 - scrolled / 2000})`;
    }
});

// Intersection Observer for animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.skill-card, .project-card, .experience-item, .about-card, .info-card'
    );

    elementsToAnimate.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Form validation and enhancement
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Add loading state to button
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = '<span>SENDING...</span>';
        submitBtn.style.opacity = '0.7';
        submitBtn.disabled = true;

        // If validation fails, restore button
        setTimeout(() => {
            if (!this.checkValidity()) {
                submitBtn.innerHTML = originalText;
                submitBtn.style.opacity = '1';
                submitBtn.disabled = false;
            }
        }, 100);
    });

    // Add focus effects
    const inputs = contactForm.querySelectorAll('.form-input, .form-textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            this.parentElement.parentElement.classList.remove('focused');
        });
    });
}

// 3D tilt effect for cards
document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 10, 10, 0.98)';
        nav.style.boxShadow = '0 5px 30px rgba(0,0,0,0.5)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});