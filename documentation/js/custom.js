function openMenu() {
  const menu = document.getElementById("myMenu");
  menu.style.left = "0";
  // menu.style.width = "300px";
  // const mainContainer = document.querySelector("#main-container");
  // mainContainer.classList.add("marginLeft");
  // menu.style.display = "block";
}

function closeMenu() {
  const menu = document.getElementById("myMenu");
  menu.style.left = "-100%";
  // const mainContainer = document.querySelector("#main-container");
  // mainContainer.classList.remove("marginLeft");
}

function conditionalCloseMenu() {
  if (window.innerWidth <= 990) {
    closeMenu();
  }
}

function setInitialMenuState() {
  if (window.innerWidth > 1023) {
    // openMenu();
  } else {
    closeMenu();
  }
}

// Set initial menu state on page load
window.addEventListener("load", setInitialMenuState);

// Add event listener to each link in the menu to close the menu when clicked
document.querySelectorAll("#myMenu a").forEach(function (link) {
  link.addEventListener("click", conditionalCloseMenu);
});

// Update menu state on window resize
window.addEventListener("resize", setInitialMenuState);
