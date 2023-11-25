let slideIndex = 1;
showSlidesBadkamer(slideIndex);

function plusSlides(n) {
  showSlidesBadkamer(slideIndex += n);
}

function huidigeDia(n) {
  showSlidesBadkamer(slideIndex = n);
}

function showSlidesBadkamer(n) {
  let i;
  let slides = document.getElementsByClassName("badkamer");
  let dots = document.getElementsByClassName("bad");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  // captionText.innerHTML = dots[slideIndex-1].alt;
}


let slideIndexSanitair = 1;
showSlidesSanitair(slideIndexSanitair);

function plusSlides1(n) {
  showSlidesSanitair(slideIndexSanitair += n);
}

function huidigeDia1(n) {
  showSlidesSanitair(slideIndexSanitair = n);
}

function showSlidesSanitair(n) {
  let i;
  let slides = document.getElementsByClassName("sanitair");
  let dots = document.getElementsByClassName("san");
  if (n > slides.length) {
    slideIndexSanitair = 1
  }
  if (n < 1) {
    slideIndexSanitair = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexSanitair - 1].style.display = "block";
  dots[slideIndexSanitair - 1].className += " active";
  // captionText.innerHTML = dots[slideIndex-1].alt;
}


// let slideIndexKoeling = 1;
// showSlidesKoeling(slideIndexKoeling);

// function plusSlides2(n) {
//   showSlidesKoeling(slideIndexKoeling += n);
// }

// function huidigeDia2(n) {
//   showSlidesKoeling(slideIndexKoeling = n);
// }

// function showSlidesKoeling(n) {
//   let i;
//   let slides = document.getElementsByClassName("koeling");
//   let dots = document.getElementsByClassName("koel");
//   if (n > slides.length) {
//     slideIndexKoeling = 1
//   }
//   if (n < 1) {
//     slideIndexKoeling = slides.length
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndexKoeling - 1].style.display = "block";
//   dots[slideIndexKoeling - 1].className += " active";
//   // captionText.innerHTML = dots[slideIndex-1].alt;
// }
