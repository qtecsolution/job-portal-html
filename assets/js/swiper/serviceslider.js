const popularService = new Swiper(".popularService", {
  spaceBetween: 15,
  grabCursor: true,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".outnext",
    prevEl: ".outprev"
  },
  breakpoints: {
    0: {
      slidesPerGroup: 1,
      slidesPerView: 1
    },
    480: {
      slidesPerGroup: 2,
      slidesPerView: 2
    },
    991: {
      slidesPerGroup: 3,
      slidesPerView: 3
    },
    1200: {
      slidesPerGroup: 4,
      slidesPerView: 4
    }
  }
})