const mySwiper = new Swiper('.example__slider', {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  slideClass: 'example__item',
  wrapperClass: 'example__list',
  pagination: {
    el: '.example__pagination',
    type: 'bullets',
    bulletClass:'example__pagination-item',
    bulletActiveClass:'example__pagination-item_active',
    clickable: true,
  },
  navigation: {
    nextEl: '.example__slider-bt_left',
    prevEl: '.example__slider-bt_right',
  },

});