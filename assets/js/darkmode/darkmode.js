// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".btn-mode");

// SUN-MOON ICONS
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("darkmode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("darkmode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
  enableDarkMode();
  moon.classList.remove("d-none");
  sun.classList.add("d-none");
}

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
    moon.classList.remove("d-none");
    sun.classList.add("d-none");
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
    moon.classList.add("d-none");
    sun.classList.remove("d-none");
  }
});
