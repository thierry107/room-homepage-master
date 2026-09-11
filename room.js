// ========================================================
// 1. DATA: List of images and text descriptions for each slide
// ========================================================
const slidesData = [
    {
        desktop: './images/desktop-image-hero-1.jpg',
        mobile: './images/mobile-image-hero-1.jpg',
        alt: 'White dining chairs around a wooden table'
    },
    {
        desktop: './images/desktop-image-hero-2.jpg',
        mobile: './images/mobile-image-hero-2.jpg',
        alt: 'Three modern chairs in green, white, and red'
    },
    {
        desktop: './images/desktop-image-hero-3.jpg',
        mobile: './images/mobile-image-hero-3.jpg',
        alt: 'Black folding chair on a neutral background'
    }
];

// ========================================================
// 2. SELECT ELEMENTS: Find HTML elements on the page
// ========================================================
// Slider controls & images
const prevBtn = document.querySelector('.slider-button.prev');
const nextBtn = document.querySelector('.slider-button.next');
const heroImg = document.querySelector('.hero__image');
const heroSource = document.querySelector('.hero__visual picture source');
const slideArticles = document.querySelectorAll('.hero__copy .slide');

// Mobile navigation controls
const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.nav-overlay');

// ========================================================
// 3. TRACK STATE: Keep track of which slide is currently showing
// ========================================================
let currentIndex = 0; // Starts at 0 (the first slide)

// ========================================================
// 4. FUNCTION: Update the page to show the current slide
// ========================================================
function showSlide() {
    // Loop through all 3 slide text articles
    slideArticles.forEach((article, index) => {
        if (index === currentIndex) {
            article.classList.add('is-active'); // Show this text
        } else {
            article.classList.remove('is-active'); // Hide other texts
        }
    });

    // Update the hero image (mobile and desktop versions)
    heroSource.srcset = slidesData[currentIndex].mobile;
    heroImg.src = slidesData[currentIndex].desktop;
    heroImg.alt = slidesData[currentIndex].alt;
}

// ========================================================
// 5. EVENT LISTENERS: Slider Next & Previous buttons
// ========================================================

// When clicking NEXT: increase index by 1
nextBtn.addEventListener('click', function () {
    currentIndex = currentIndex + 1;

    // If we go past the last slide (index 2), go back to the first slide (index 0)
    if (currentIndex > 2) {
        currentIndex = 0;
    }

    showSlide();
});

// When clicking PREVIOUS: decrease index by 1
prevBtn.addEventListener('click', function () {
    currentIndex = currentIndex - 1;

    // If we go below 0, jump to the last slide (index 2)
    if (currentIndex < 0) {
        currentIndex = 2;
    }

    showSlide();
});

// Keyboard Left / Right arrow navigation
window.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        prevBtn.click();
    }
    if (event.key === 'ArrowRight') {
        nextBtn.click();
    }
});

// ========================================================
// 6. EVENT LISTENERS: Mobile Menu Open & Close
// ========================================================

// Open menu
menuToggle.addEventListener('click', function () {
    nav.classList.add('is-open');
    overlay.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
});

// Close menu
menuClose.addEventListener('click', function () {
    nav.classList.remove('is-open');
    overlay.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
});

// Close menu when clicking on the dark background overlay
overlay.addEventListener('click', function () {
    nav.classList.remove('is-open');
    overlay.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
});
