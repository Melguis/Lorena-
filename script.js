document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    const valentines = document.querySelector('.valentines');
    const card = document.querySelector('.card');

    let isCardUp = false;

    container.addEventListener('mouseenter', function () {
        card.style.transition = 'top 0.5s ease';
        card.style.top = '-90px';
    });

    container.addEventListener('mouseleave', function () {
        card.style.transition = 'top 0.5s ease';
        card.style.top = '5px';
    });

    valentines.addEventListener('click', function () {
        card.style.transition = 'top 0.5s ease';
        if (isCardUp) {
            card.style.top = '5px'; // Move card down
        } else {
            card.style.top = '-90px'; // Move card up
        }
        isCardUp = !isCardUp; // Toggle the state
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
        carouselItems.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
        });
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Optional: Auto-advance the carousel every 3 seconds
    // setInterval(function () {
    //     nextButton.click();
    // }, 5000);

    // Initial update
    updateCarousel();
});