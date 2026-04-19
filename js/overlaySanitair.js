document.addEventListener("DOMContentLoaded", () => {
    const collages = {
        "badkamerrenovatie": [
            "./fotos/sanitair_badkamers/IMG_1912.jpg",
            "./fotos/sanitair_badkamers/IMG_5941.jpg",
            "./fotos/sanitair_badkamers/IMG_9646.jpg"
        ],
        "waterbehandeling": [
            "./fotos/waterbehandeling/IMG_7563.jpg",
            "./fotos/waterbehandeling/IMG_7564.jpg"
        ],
        "regenwaterrecuperatie": [
            "./fotos/sanitaireVoorzieningen/IMG_2663.jpg",
            "./fotos/sanitaireVoorzieningen/IMG_6993.jpg",
            "./fotos/sanitaireVoorzieningen/IMG_8864.jpg"
        ]
    };

    let currentSlideIndex = 0;
    let currentSlides = [];

    const soorten = document.querySelectorAll(".soort");
    soorten.forEach((soort, index) => {
        soort.addEventListener("click", () => {
            const keys = Object.keys(collages);
            const category = keys[index];
            currentSlides = collages[category];
            currentSlideIndex = 0;
            openOverlay(currentSlides[currentSlideIndex]);
        });
    });

    function openOverlay(imageSrc) {
        const overlay = document.getElementById("overlay");
        const slideshowImage = document.getElementById("slideshow-image");

        slideshowImage.src = imageSrc;
        overlay.style.display = "flex";
    }

    window.closeOverlay = function () {
        const overlay = document.getElementById("overlay");
        overlay.style.display = "none";
    };

    window.nextSlide = function () {
        currentSlideIndex = (currentSlideIndex + 1) % currentSlides.length;
        const slideshowImage = document.getElementById("slideshow-image");
        slideshowImage.src = currentSlides[currentSlideIndex];
    };

    // Vorige slide
    window.prevSlide = function () {
        currentSlideIndex = (currentSlideIndex - 1 + currentSlides.length) % currentSlides.length;
        const slideshowImage = document.getElementById("slideshow-image");
        slideshowImage.src = currentSlides[currentSlideIndex];
    };
});
