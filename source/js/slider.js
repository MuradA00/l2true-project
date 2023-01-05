const mainSlider = new Swiper('.beta__wrapper', {
  sliderPerView: 1,
  allowTouchMove: true,
  navigation: {
    nextEl: '.beta-control__btn--next',
    prevEl: '.beta-control__btn--prev'
  },

  pagination: {
    el: '.beta-control__bullets',
    clickable: true
  }
});
