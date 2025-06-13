// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                if (navMenu.classList.contains('active')) {
                    if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) bar.style.opacity = '0';
                    if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                }
            });
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const bars = navToggle.querySelectorAll('.bar');
                bars.forEach(bar => {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                });
            });
        });
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.service-card, .process-step, .portfolio-card, .demo-benefit, .demo-product');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // WhatsApp button pulse animation
    const whatsappButton = document.querySelector('.whatsapp-float');
    if (whatsappButton) {
        setInterval(() => {
            whatsappButton.style.animation = 'none';
            setTimeout(() => {
                whatsappButton.style.animation = 'pulse 2s infinite';
            }, 10);
        }, 10000); // Pulse every 10 seconds
    }
    
    // Portfolio card hover effects
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Demo product hover effects
    const demoProducts = document.querySelectorAll('.demo-product');
    demoProducts.forEach(product => {
        product.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        product.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Floating cards animation (for hero section)
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.animationPlayState = 'paused';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'none';
            this.style.animationPlayState = 'running';
        });
    });
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
        
        // Trigger hero content animation
        const heroContent = document.querySelector('.hero-content, .demo-hero-content');
        if (heroContent) {
            heroContent.style.animation = 'fadeInUp 1s ease-out';
        }
    });
    
    // CTA button click tracking (for analytics)
    const ctaButtons = document.querySelectorAll('.cta-button, .demo-cta-btn, .portfolio-btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add a subtle click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px)';
            }, 150);
        });
    });
    
    // Parallax effect for hero sections
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroVisual = document.querySelector('.hero-visual');
        const demoHeroImage = document.querySelector('.demo-hero-image');
        
        if (heroVisual) {
            heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        
        if (demoHeroImage) {
            demoHeroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
    });
});

// Utility function to add stagger animation to elements
function staggerAnimation(elements, delay = 100) {
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * delay}ms`;
    });
}

// Initialize stagger animations
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    const processSteps = document.querySelectorAll('.process-step');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    
    staggerAnimation(serviceCards, 150);
    staggerAnimation(processSteps, 200);
    staggerAnimation(portfolioCards, 100);
});