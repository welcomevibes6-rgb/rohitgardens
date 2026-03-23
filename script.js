document.addEventListener('DOMContentLoaded', () => {
    // --- Smooth Scrolling with Inertia (Simplified Polyfill/Vanilla) ---
    const lenisScroll = () => {
        // Since I'm not using a heavy library, I'll use simple CSS and JS scroll listeners
        // for animations.
    };

    // --- Hero Background Slider ---
    const heroSlides = document.querySelectorAll('.hero-bg-slide');
    if (heroSlides.length > 0) {
        let currentSlide = 0;
        const totalSlides = heroSlides.length;

        function nextSlide() {
            heroSlides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % totalSlides;
            heroSlides[currentSlide].classList.add('active');
        }

        setInterval(nextSlide, 5000); // 5 seconds per slide
    }

    // --- Hero Text Animation ---
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtext = document.querySelector('.hero-subtext');
    if (heroTitle && heroSubtext) {
        // Entry animation
        setTimeout(() => {
            heroSubtext.style.opacity = '1';
            heroSubtext.style.transition = 'opacity 1.5s ease-out';
        }, 300);

        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out';
            heroTitle.style.transform = 'translateY(0)';
        }, 800);

        // Optional Cinematic Exit (as requested: stay visible for a few seconds then slight fade)
        setTimeout(() => {
            heroTitle.style.opacity = '0.7';
            heroSubtext.style.opacity = '0.7';
        }, 6000);
    }

    // --- Mobile Hamburger Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const closeMenu = document.querySelector('.close-menu');
    const navLinks = document.querySelectorAll('.nav-menu li');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            // Toggle Nav
            navMenu.classList.add('nav-active');
            
            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Hamburger Animation
            hamburger.classList.add('toggle');
        });

        if (closeMenu) {
            closeMenu.addEventListener('click', () => {
                navMenu.classList.remove('nav-active');
                hamburger.classList.remove('toggle');
            });
        }

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('nav-active');
                hamburger.classList.remove('toggle');
            });
        });
    }

    // --- Navbar Scroll Effect ---
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.nav-wrapper');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // --- Reveal Animations on Scroll ---
    const reveals = document.querySelectorAll('.reveal');
    function reveal() {
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', reveal);
    reveal(); // Initial check

    // --- Plants Filtering ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const plantCards = document.querySelectorAll('.plant-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-filter');

            plantCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });

    // --- Custom Cursor ---
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        document.querySelectorAll('a, button, .card-premium').forEach(item => {
            item.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            item.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });
    }

    // --- Background Banner Zoom Effect ---
    const bannerTitles = document.querySelectorAll('.banner-title');
    bannerTitles.forEach((bt, index) => {
        setTimeout(() => {
            bt.style.opacity = '1';
            bt.style.transform = 'translateY(0)';
            bt.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out';
        }, 500);
    });
});
