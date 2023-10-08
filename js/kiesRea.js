document.addEventListener("DOMContentLoaded", function () {
    let verwarmingsKnop = document.getElementById("verwarmKnop");
    let sanitairKnop = document.getElementById("sanitairKnop");
    let koelingKnop = document.getElementById("koelKnop");

    function toonVerwarming() {
        document.querySelector(".verbergSanitair").style.display = "none";
        document.querySelector(".verbergKoeling").style.display = "none";
        document.querySelector(".verbergVerwarming").style.display = "block";
        verwarmingsKnop.classList.remove("keuze");
        verwarmingsKnop.classList.add("aangeDuid");
        sanitairKnop.classList.remove("aangeDuid");
        sanitairKnop.classList.add("keuze");
        koelingKnop.classList.remove("aangeDuid");
        koelingKnop.classList.add("keuze");
    }

    function toonSanitair() {
        document.querySelector(".verbergSanitair").style.display = "block";
        document.querySelector(".verbergKoeling").style.display = "none";
        document.querySelector(".verbergVerwarming").style.display = "none";
        verwarmingsKnop.classList.remove("aangeDuid");
        verwarmingsKnop.classList.remove("standaard");
        verwarmingsKnop.classList.add("keuze");
        sanitairKnop.classList.remove("keuze");
        sanitairKnop.classList.add("aangeDuid");
        koelingKnop.classList.remove("aangeDuid");
        koelingKnop.classList.add("keuze");
    }

    function toonKoeling() {
        document.querySelector(".verbergKoeling").style.display = "block";
        document.querySelector(".verbergVerwarming").style.display = "none";
        document.querySelector(".verbergSanitair").style.display = "none";
        verwarmingsKnop.classList.remove("aangeDuid");
        verwarmingsKnop.classList.remove("standaard");
        verwarmingsKnop.classList.add("keuze");
        koelingKnop.classList.remove("keuze");
        koelingKnop.classList.add("aangeDuid");
        sanitairKnop.classList.remove("aangeDuid");
        sanitairKnop.classList.add("keuze");
    }

    verwarmingsKnop.addEventListener("click", toonVerwarming);
    sanitairKnop.addEventListener("click", toonSanitair);
    koelingKnop.addEventListener("click", toonKoeling);
});