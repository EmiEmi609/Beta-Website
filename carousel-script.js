let currentSlide = 0;

function moveSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const totalItems = document.querySelectorAll('.carousel-item').length;

    currentSlide = (currentSlide + direction + totalItems) % totalItems;
    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}
