// let elementje = document.getElementById("fotoKlik");
// elementje.addEventListener("click", showCross);

// let sluitKruis = document.querySelector(".close");
// sluitKruis.addEventListener("click", hideCross);

// function showCross() {
//     elementje.classList.add("fotoKlik");
//     sluitKruis.classList.add("show");
// }

// function hideCross() {
//     elementje.classList.remove("fotoKlik");
//     sluitKruis.classList.remove("show");
// }






let slideIndex = 1;
showSlidesBadkamer(slideIndex);

function plusSlides1(n) {
  showSlidesBadkamer(slideIndex += n);
}

function huidigeDia(n) {
  showSlidesBadkamer(slideIndex = n);
}

function showSlidesBadkamer(n) {
  let i;
  let slides = document.getElementsByClassName("badkamer");
  let dots = document.getElementsByClassName("bad");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  // captionText.innerHTML = dots[slideIndex-1].alt;
}

