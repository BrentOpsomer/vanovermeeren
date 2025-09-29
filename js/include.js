// Function to generate and insert the navigation menu
function insertNavigationMenu() {
  const navigationMenu = `
    <nav class="nav" role="navigation" aria-label="Main navigation">
  <ul class="menu">
    <div class="logo" onclick="window.location.href='index';">
      <p class="naam">VAN OVERMEEREN</p>
      <img src="fotos/logoHeader.png">
    </div>
    <li class="item"><a href="index">HOME</a></li>
    <li class="item"><a href="verwarming">VERWARMING</a></li>
    <li class="item"><a href="sanitair">SANITAIR</a></li>
    <li class="item"><a href="ventilatie">VENTILATIE</a></li>
    <li class="item"><a href="airconditioning">AIRCONDITIONING</a></li>
    <li class="item"><a href="realisaties">REALISATIES</a></li>
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
    <footer class="site-footer" id="foot" role="contentinfo" aria-label="Website footer">
  <div class="site-footer__inner">
    <div class="site-footer__grid">
      <!-- Merk / logo -->
      <section class="footer-block footer-brand" aria-labelledby="footer-brand-title">
        <h4 id="footer-brand-title" class="visually-hidden">Van Overmeeren</h4>
        <img class="footer-logo" src="fotos/logo.png" alt="Van Overmeeren bv">
        <p class="footer-text">
          Verwarming • Sanitair • Ventilatie • Airconditioning
        </p>
      </section>

      <!-- Navigatie -->
      <nav class="footer-block footer-nav" aria-labelledby="footer-nav-title">
        <h4 id="footer-nav-title" class="footer-title">Navigatie</h4>
        <ul class="footer-links">
          <li><a href="realisaties">Realisaties</a></li>
          <li><a href="index#specs">Diensten</a></li>
          <li><a class="onder" href="verwarming">- Verwarming</a></li>
          <li><a class="onder" href="sanitair">- Sanitair</a></li>
          <li><a class="onder" href="ventilatie">- Ventilatie</a></li>
          <li><a class="onder" href="onderhoud">- Onderhoud</a></li>
        </ul>
      </nav>

      <!-- Contact -->
      <section class="footer-block footer-contact" aria-labelledby="footer-contact-title">
        <h4 id="footer-contact-title" class="footer-title">Contacteer ons</h4>

        <ul class="contact-list">
          <li class="contact-item">
            <span class="icon-bubble"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
            <a class="contact-link"
               href="https://www.google.be/maps/place/Zulzekestraat+44c,+9690+Kluisbergen/@50.7824652,3.5694859,17z/"
               target="_blank" rel="noopener">
              Zulzekestraat 44c, 9690 Kluisbergen
            </a>
          </li>
          <li class="contact-item">
            <span class="icon-bubble"><i class="fa fa-phone" aria-hidden="true"></i></span>
            <a class="contact-link" href="tel:+32476434775">0476 43 47 75</a>
          </li>
          <li class="contact-item">
            <span class="icon-bubble"><i class="fa fa-envelope" aria-hidden="true"></i></span>
            <a class="contact-link" href="mailto:van.overmeeren@telenet.be">van.overmeeren@telenet.be</a>
          </li>
        </ul>

        <div class="socials" aria-label="Volg ons">
          <a class="icon-bubble social" href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          
        </div>
      </section>
    </div>

    <div class="site-footer__bottom">
      <p class="footer-bottom__left">© 2025 vanovermeeren bv</p>
      <p class="footer-bottom__right"><a href="/privacy">Privacy</a></p>
    </div>
  </div>
</footer>


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