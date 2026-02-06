/* ========================================
   Portfolio — Isaías Monarrez-Ayala
   ======================================== */

(function () {
    'use strict';

    // ---- Loading Screen ----
    const loader = document.getElementById('loader');
    document.body.classList.add('loading');

    window.addEventListener('load', function () {
        setTimeout(function () {
            loader.classList.add('hidden');
            document.body.classList.remove('loading');
        }, 1800);
    });

    // ---- Navbar Scroll Behavior ----
    const navbar = document.getElementById('navbar');
    let lastScrollY = 0;

    function handleNavScroll() {
        const scrollY = window.scrollY;
        if (scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScrollY = scrollY;
    }

    window.addEventListener('scroll', handleNavScroll, { passive: true });

    // ---- Mobile Menu ----
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded',
            hamburger.classList.contains('active') ? 'true' : 'false'
        );
    });

    // Close menu when a nav link is clicked
    document.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    // ---- Active Nav Highlight ----
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link:not(.nav-resume)');

    function highlightNav() {
        let current = '';
        sections.forEach(function (section) {
            var top = section.offsetTop - 120;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(function (link) {
            link.style.color = '';
            if (link.getAttribute('href') === '#' + current) {
                link.style.color = navbar.classList.contains('scrolled')
                    ? 'var(--pine)'
                    : 'var(--gold)';
            }
        });
    }

    window.addEventListener('scroll', highlightNav, { passive: true });

    // ---- Scroll Reveal ----
    var reveals = document.querySelectorAll('.reveal');

    var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(function (el) {
        revealObserver.observe(el);
    });

    // ---- Animated Counters ----
    var statNumbers = document.querySelectorAll('.stat-number');

    function animateCounter(el) {
        var target = parseInt(el.getAttribute('data-target'), 10);
        var duration = 2000;
        var start = 0;
        var startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            var ease = 1 - Math.pow(1 - progress, 3);
            var current = Math.floor(ease * target);
            el.textContent = current.toLocaleString();
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target.toLocaleString();
            }
        }

        requestAnimationFrame(step);
    }

    var counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(function (el) {
        counterObserver.observe(el);
    });

    // ---- Parallax on Hero Shapes ----
    var shapes = document.querySelectorAll('.shape');

    window.addEventListener('scroll', function () {
        var scrollY = window.scrollY;
        if (scrollY < window.innerHeight) {
            shapes.forEach(function (shape, i) {
                var speed = 0.03 + i * 0.02;
                shape.style.transform = 'translateY(' + (scrollY * speed) + 'px)';
            });
        }
    }, { passive: true });

    // ---- Smooth Anchor Scrolling (fallback) ----
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

})();
