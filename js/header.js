// header.js

// Function to handle the interactions with the navigation menu
function setupNavigationInteractions() {
  const toggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");
  const items = document.querySelectorAll(".item");

  /* Toggle mobile menu */
  function toggleMenu() {
    menu.classList.toggle("active");
  }

  /* Activate Submenu */
  function toggleItem() {
    if (this.classList.contains("has-submenu")) {
      this.classList.toggle("submenu-active");
    }
  }

  /* Close Submenu From Anywhere */
  function closeSubmenu(e) {
    if (menu.querySelector(".submenu-active") && !menu.contains(e.target)) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
  }

  /* Event Listeners */
  toggle.addEventListener("click", toggleMenu);
  for (let item of items) {
    item.addEventListener("click", toggleItem);
    item.addEventListener("keypress", toggleItem);
  }
  document.addEventListener("click", closeSubmenu);

  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentState = button.getAttribute("data-state");

      if (!currentState || currentState === "closed") {
        button.setAttribute("data-state", "opened");
        button.setAttribute("uitgebreid", "true");
      } else {
        button.setAttribute("data-state", "closed");
        button.setAttribute("uitgebreid", "false");
      }
    });
  });

  document.querySelector(".big-button").addEventListener("click", () => {
    location.href = "realisaties.php";
  });
}



// Call the function to handle the interactions with the navigation menu when the entire window is loaded
window.addEventListener("load", setupNavigationInteractions);

