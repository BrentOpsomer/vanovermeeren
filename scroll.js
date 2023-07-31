const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const verstopteElementen = document.querySelectorAll('.hidden');
verstopteElementen.forEach((verstoptElement) => observer.observe(verstoptElement));
