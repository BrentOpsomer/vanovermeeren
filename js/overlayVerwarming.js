document.addEventListener("DOMContentLoaded", () => {
    const collages = {
        "warmtepomp": [
            "./fotos/verwarming/Warmtepomp/IMG_3347.jpg",
            "./fotos/verwarming/Warmtepomp/IMG_8970.jpg",
            "./fotos/verwarming/Warmtepomp/IMG_9763.jpg"
        ],
        "gas": [
            "./fotos/verwarming/Gas/IMG_0998.jpg",
            "./fotos/verwarming/Gas/IMG_3046.jpg",
            "./fotos/verwarming/Gas/IMG_8423.jpg"
        ],
        "mazout": [
            "./fotos/verwarming/Mazout/IMG_1888.jpg",
            "./fotos/verwarming/Mazout/IMG_5959.jpg",
            "./fotos/verwarming/Mazout/IMG_5961.jpg"
        ],
        "vloerverwarming": [
            "./fotos/verwarming/Vloerverwarming/IMG_0025.jpg",
            "./fotos/verwarming/Vloerverwarming/IMG_2359.jpg",
            "./fotos/verwarming/Vloerverwarming/IMG_7319.jpg"
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
