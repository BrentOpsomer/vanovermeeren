const upknop = document.querySelector('.naar-boven');
const alleLinkse = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('toonLinks');
        }
    });
});

const alleRechtse = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('toonRechts');
        } else {

        }
    });
});

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 150) {
//         upknop.classList.add('toon-up');
//     } else {
//         upknop.classList.remove('toon-up');
//     }
// });

const boxesFromLeft = document.querySelectorAll('.vanLinks');
const boxesFromRight = document.querySelectorAll('.vanRechts');
boxesFromLeft.forEach((vanLinks) => alleLinkse.observe(vanLinks));
boxesFromRight.forEach((vanRechts) => alleRechtse.observe(vanRechts));