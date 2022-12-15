// INITIALIZING TOGGLE BUTTON
const toggleButton = document.querySelector("#btn-toggle");

// TOGGLE BUTTON TRIGGERED
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");

  // INITIALIZING SIDEBAR, MAIN SECTION AND TOGGLE ICON
  const sidebar = document.querySelector("#desktopsidebar");
  const main = document.querySelector("#main");

  const titles = document.querySelectorAll(".sidelist .title");

  titles.forEach((title) => {
    // ADD AND REMOVE COLLAPSED CLASS WITH TITLE
    if (title.classList.contains("active")) {
      title.classList.remove("active");
    } else {
      title.classList.add("active");
    }
  });

  // ADD AND REMOVE COLLAPSED CLASS WITH SIDEBAR
  if (sidebar.classList.contains("sidecollapsed")) {
    sidebar.classList.remove("sidecollapsed");
  } else {
    sidebar.classList.add("sidecollapsed");
  }

  // ADD AND REMOVE COLLAPSED CLASS WITH MAIN
  if (main.classList.contains("maincollapsed")) {
    main.classList.remove("maincollapsed");
  } else {
    main.classList.add("maincollapsed");
  }
});
