// include.js

// Function to generate and insert the navigation menu
function insertNavigationMenu() {
    const navigationMenu = `
    <nav>
    <ul class="menu">
      <div class="logo"><img src="fotos/logo.png"></div>
      <li class="item"><a href="index.html">HOME</a></li>
      <li class="item"><a href="realisaties.php">REALISATIES</a></li>
      <li class="item has-submenu">
        <a tabindex="0">SPECIALITEITEN</a>
        <ul class="submenu">
          <li class="subitem"><a href="verwarming.html">VERWARMING</a></li>
          <li class="subitem"><a href="sanitair.html">SANITAIR</a></li>
          <li class="subitem"><a href="cooling.html">COOLING</a></li>
          <li class="subitem"><a href="onderhoud.html">ONDERHOUD</a></li>
        </ul>
      </li>
      <li class="item"><a href="#foot">CONTACT</a>
      </li>
      <button class="navKnop" aria-controls="navigatie">
      <svg class="toggle" fill="var(--button-color)" viewBox="0 0 100 100" width="50">
        <rect class="lijntje boven" width="80" height="10" x="10" y="25" rx="5">
        </rect>
        <rect class="lijntje midden" width="80" height="10" x="10" y="45" rx="5">
        </rect>
        <rect class="lijntje beneden" width="80" height="10" x="10" y="65" rx="5">
        </rect>
      </svg>
    </button>
    </ul>
  </nav>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    `;
  
    // Get the element where you want to insert the navigation menu (e.g., the <header> element)
    const headerElement = document.getElementById('navigation-placeholder');
  
    // Insert the navigation menu HTML into the <header> element
    headerElement.innerHTML = navigationMenu;
  }
  
  // Call the function to insert the navigation menu when the DOM is loaded
  window.addEventListener('load', insertNavigationMenu);
