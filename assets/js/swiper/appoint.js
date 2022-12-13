
const appointSlider = new Swiper(".appointSlider", {
  loop: true,
  spaceBetween: 10,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
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
    }
  }
})