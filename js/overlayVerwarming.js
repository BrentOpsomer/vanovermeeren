document.addEventListener("DOMContentLoaded", () => {
    const collages = {
        "gas": ["./fotos/gas.png", "./fotos/gas.jpg", "./fotos/gasinstallatie.jpg"],
        "mazout": ["./fotos/stock.jpg", "./fotos/stock.jpg", "./fotos/stock.jpg"],
        "warmtepomp": ["./fotos/stock.jpg", "./fotos/stock.jpg", "./fotos/stock.jpg"],
        "vloerverwarming": ["./fotos/stock.jpg", "./fotos/stock.jpg", "./fotos/stock.jpg"]
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