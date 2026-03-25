let currentCategory = "verwarming";
let currentTitle = "verwarmingTitel";
let currentIndex = 0;

function showCategory(category) {
    const galleries = document.querySelectorAll(".gallery");
    galleries.forEach((gallery) => gallery.classList.add("hidden"));

    currentCategory = category;
    document.getElementById(category).classList.remove("hidden");
}

function showTitel(title) {
    const galleriesTitles = document.querySelectorAll(".galleryTitel");
    galleriesTitles.forEach((galleryTitle) => galleryTitle.classList.add("hidden"));

    currentTitle = title;
    document.getElementById(title).classList.remove("hidden");
}

function updateLightboxContent() {
    const gallery = document.getElementById(currentCategory);
    const images = gallery.querySelectorAll("img");
    const currentImage = images[currentIndex];

    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");

    lightboxImg.src = currentImage.src;
    lightboxImg.alt = currentImage.alt;
    lightboxCaption.textContent = currentImage.dataset.title || currentImage.alt || "";
}

function openLightbox(index, category) {
    currentIndex = index;
    currentCategory = category;

    const lightbox = document.getElementById("lightbox");
    updateLightboxContent();
    lightbox.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.add("hidden");
    document.body.style.overflow = "";
}

function nextImage() {
    const gallery = document.getElementById(currentCategory);
    const images = gallery.querySelectorAll("img");
    currentIndex = (currentIndex + 1) % images.length;
    updateLightboxContent();
}

function prevImage() {
    const gallery = document.getElementById(currentCategory);
    const images = gallery.querySelectorAll("img");
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightboxContent();
}

document.addEventListener("keydown", function (event) {
    const lightbox = document.getElementById("lightbox");

    if (lightbox.classList.contains("hidden")) return;

    if (event.key === "Escape") {
        closeLightbox();
    } else if (event.key === "ArrowRight") {
        nextImage();
    } else if (event.key === "ArrowLeft") {
        prevImage();
    }
});

document.getElementById("lightbox").addEventListener("click", function (event) {
    const lightboxImg = document.getElementById("lightbox-img");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const caption = document.getElementById("lightbox-caption");

    if (
        event.target !== lightboxImg &&
        event.target !== prevBtn &&
        event.target !== nextBtn &&
        event.target !== caption
    ) {
        closeLightbox();
    }
});