const makeupSlider = new Swiper(".makeupSlider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
})