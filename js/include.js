// Function to generate and insert the navigation menu
function insertNavigationMenu() {
  const navigationMenu = `
    <nav>
      <ul class="menu">
        <div class="logo"><img src="fotos/logo.png"></div>
        <li class="item"><a href="index.html">HOME</a></li>
        <li class="item"><a href="realisaties.html">REALISATIES</a></li>
        <li class="item has-submenu">
          <a tabindex="0">SPECIALITEITEN</a>
          <ul class="submenu">
            <li class="subitem"><a href="verwarming.html">VERWARMING</a></li>
            <li class="subitem"><a href="sanitair.html">SANITAIR</a></li>
            <li class="subitem"><a href="cooling.html">COOLING</a></li>
            <li class="subitem"><a href="onderhoud.html">ONDERHOUD</a></li>
          </ul>
        </li>
        <li class="item"><a href="#foot">CONTACT</a></li>
        <button class="navKnop" aria-controls="navigatie">
          <svg class="toggle" fill="var(--button-color)" viewBox="0 0 100 100" width="50">
            <rect class="lijntje boven" width="80" height="10" x="10" y="25" rx="5"></rect>
            <rect class="lijntje midden" width="80" height="10" x="10" y="45" rx="5"></rect>
            <rect class="lijntje beneden" width="80" height="10" x="10" y="65" rx="5"></rect>
          </svg>
        </button>
      </ul>
    </nav>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  `;

  // Get the element where you want to insert the navigation menu (e.g., the <header> element)
  const headerElement = document.getElementById('navigation-placeholder');

  // Insert the navigation menu HTML into the <header> element
  if (headerElement) {
    headerElement.innerHTML = navigationMenu;
  }
}

// Function to generate and insert the footer menu
function includeFooterMenu() {
  const footerMenu = `
    <footer class="footer" id="foot">
      <div class="container">
        <div class="row">
          <div class="footerKolom">
            <h4>Navigatie</h4>
            <ul>
              <li><a href="realisaties.html">Realisaties</a></li>
              <li><a href="index.html#specs">Specialiteiten</a></li>
              <li><a class="onder" href="verwarming.html">- Verwarming</a></li>
              <li><a class="onder" href="sanitair.html">- Sanitair</a></li>
              <li><a class="onder" href="cooling.html">- Cooling</a></li>
              <li><a class="onder" href="onderhoud.html">- Onderhoud</a></li>
            </ul>
          </div>
          <div class="footerKolom">
            <h4>Volg ons</h4>
            <div class="iconen">
              <a href="tel:0476/43-47-75"><i class="fa fa-facebook"></i></a>
            </div>
          </div>
          <div class="footerKolom">
            <div class="iconen">
              <a href="tel:0476/43-47-75"><i class="fa fa-phone"></i></a>
            </div>
            <ul>
              <li><a class="contact" href="tel:">0476 43 47 75</a></li>
            </ul>
            <ul>
              <div class="iconen">
                <a href="https://www.google.be/maps/place/Zulzekestraat+44c,+9690+Kluisbergen/@50.7824652,3.5694859,17z/data=!3m1!4b1!4m5!3m4!1s0x47c31a9a5bcc8a89:0x42b9f8f05b3ca2b!8m2!3d50.7824652!4d3.5716746"
                  target="_blank"><i class="fa fa-map-marker"></i></a>
              </div>
              <li><a class="contact"
                  href="https://www.google.be/maps/place/Zulzekestraat+44c,+9690+Kluisbergen/@50.7824652,3.5694859,17z/data=!3m1!4b1!4m5!3m4!1s0x47c31a9a5bcc8a89:0x42b9f8f05b3ca2b!8m2!3d50.7824652!4d3.5716746"
                  target="_blank">Zulzekestraat 44c</a></li>
            </ul>
            <ul>
              <div class="iconen">
                <a href="mailto:"><i class="fa fa-envelope"></i></a>
              </div>
              <li><a class="contact" href="mailto:">jurgen.vanovermeeren@.....com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <div class="copyR">
      <img class="logo-on-image" src="fotos/logoKort.png">
      <li class="copyright"><a>&copy; 2023 - vanovermeeren.be</a></li>
    </div>
  `;

  const footerElement = document.getElementById('footer-placeholder');

  if (footerElement) {
    footerElement.innerHTML = footerMenu;
  }
}

// Call the functions to insert the navigation and footer menus when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  insertNavigationMenu();
  includeFooterMenu();
});
