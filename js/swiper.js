/*------ Swiper Fade Effect ------*/

var swiper = new Swiper('.swiper-container', {
    initialSlide: 1,
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 8000,
    },
  });