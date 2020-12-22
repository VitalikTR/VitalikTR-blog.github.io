/*------ Swiper Fade Effect ------*/

var swiper = new Swiper('.swiper-container', {
    initialSlide: 1,
    spaceBetween: 30,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 8000,
    },
  });