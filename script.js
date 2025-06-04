// Menu Responsive
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('nav ul');
if (menuIcon && navMenu) {
    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Carousel for Hero Section
const heroSlides = document.querySelectorAll('#hero .slide');
const heroDots = document.querySelectorAll('#hero .dot');
let heroCurrentSlide = 0;
let heroInterval;

function showHeroSlide(index) {
    heroSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    heroDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    heroCurrentSlide = index;
    resetHeroInterval();
}

function resetHeroInterval() {
    clearInterval(heroInterval);
    heroInterval = setInterval(() => {
        let next = (heroCurrentSlide + 1) % heroSlides.length;
        showHeroSlide(next);
    }, 5000);
}

heroDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showHeroSlide(index);
    });
});

resetHeroInterval();

// Carousel for Next Section
const nextSlides = document.querySelectorAll('#next-section .slide');
const nextDots = document.querySelectorAll('#next-section .dot');
let nextCurrentSlide = 0;
let nextInterval;

function showNextSlide(index) {
    nextSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    nextDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    nextCurrentSlide = index;
    resetNextInterval();
}

function resetNextInterval() {
    clearInterval(nextInterval);
    nextInterval = setInterval(() => {
        let next = (nextCurrentSlide + 1) % nextSlides.length;
        showNextSlide(next);
    }, 5000);
}

nextDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showNextSlide(index);
    });
});

resetNextInterval();