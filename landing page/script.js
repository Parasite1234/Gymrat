let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;
const carousel = document.querySelector('.carousel');

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

function updateCarousel() {
    const angle = currentIndex * -72; // 360 / totalItems
    carousel.style.transform = `rotateY(${angle}deg)`;
}

