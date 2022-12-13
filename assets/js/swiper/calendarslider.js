const calendarslide = new Swiper(".calendarslider", {
  grabCursor: true,
  loop: true,
  loopFillGroupWithBlank: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false
  // },
  spaceBetween: 16,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.nextday',
    prevEl: '.prevday'
  },
  breakpoints: {
    0: {
      slidesPerView: 4
    },
    575: {
      slidesPerView: 6
    },
    768: {
      slidesPerView: 7
    }
  }
})