const clientSlider = new Swiper(".clientSlider", {
  slidesPerGroup: 1,
  spaceBetween: 32,
  grabCursor: true,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    360: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    991: {
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 5
    }
  }
})