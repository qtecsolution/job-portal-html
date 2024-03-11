window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".scrollSection");
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    console.log(sectionTop - sectionHeight / 3);
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
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
