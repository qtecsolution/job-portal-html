const bannerSwiper = new Swiper(".bannerslider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  breakpoints: {
    992: {
      direction: "vertical"
    }
  }
})