window.addEventListener("scroll", function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    if (window.scrollY > 200) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });
  
  document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  