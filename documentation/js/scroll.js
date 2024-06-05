window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".scrollSection");
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 10) {
      currentSection = section.getAttribute("id");
    }
  });

  const activeLink = document.querySelector('a[href="#' + currentSection + '"]');
  document.querySelectorAll(".nav_main li a").forEach((link) => {
    link.classList.remove("active");
  });

  let a = document.querySelectorAll(".nav_main li a");
  if (activeLink) {
    activeLink.classList.add("active");
  }
});

document.querySelectorAll(".sidebar-dropdown > a").forEach(function (element) {
  element.addEventListener("click", function (event) {
    // Slide up all sidebar submenus
    document.querySelectorAll(".sidebar-submenu").forEach(function (submenu) {
      submenu.style.display = "none";
    });

    var parent = event.target.parentElement;

    if (parent.classList.contains("active")) {
      document.querySelectorAll(".sidebar-dropdown").forEach(function (dropdown) {
        dropdown.classList.remove("active");
      });
      parent.classList.remove("active");
    } else {
      document.querySelectorAll(".sidebar-dropdown").forEach(function (dropdown) {
        dropdown.classList.remove("active");
      });
      event.target.nextElementSibling.style.display = "block";
      parent.classList.add("active");
    }
  });
});
