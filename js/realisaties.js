let currentCategory = 'verwarming';
let currentTitle = 'verwarmingTitel';
let currentIndex = 0;

function showCategory(category, title) {
    const galleries = document.querySelectorAll('.gallery');
    galleries.forEach(gallery => gallery.classList.add('hidden'));


    currentCategory = category;
    document.getElementById(category).classList.remove('hidden');
}

function showTitel(title) {
    const galleriesTitles = document.querySelectorAll('.galleryTitel');
    galleriesTitles.forEach(galleryTitle => galleryTitle.classList.add('hidden'));

    currentTitle = title;
    document.getElementById(title).classList.remove('hidden');
}

function openLightbox(index, category) {
    currentIndex = index;
    currentCategory = category;

    const gallery = document.getElementById(category);
    const images = gallery.querySelectorAll('img');

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    lightboxImg.src = images[index].src;
    lightbox.classList.remove('hidden');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('hidden');
}

function nextImage() {
    const gallery = document.getElementById(currentCategory);
    const images = gallery.querySelectorAll('img');
    currentIndex = (currentIndex + 1) % images.length;

    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = images[currentIndex].src;
}

function prevImage() {
    const gallery = document.getElementById(currentCategory);
    const images = gallery.querySelectorAll('img');
    currentIndex = (currentIndex - 1 + images.length) % images.length;

    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = images[currentIndex].src;
}