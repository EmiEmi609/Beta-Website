let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images img');
const totalSlides = slides.length;

function updateSlide() {
    const offset = -currentSlide * 100;  // Each image takes up 100% of the width
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateSlide();
}

updateSlide(); // Initial call
