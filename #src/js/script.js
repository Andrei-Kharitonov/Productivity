//burger-menu
menu__icon.onclick = function () {
  menu__icon.classList.toggle("_active");
  menu__body.classList.toggle("_active");
}

//slider
const swiperFirstScreen = new Swiper(".swiper-first-screen", {

  pagination: {
    el: ".swiper-pagination-first-screen",
    clickable: true,
  },

  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },

  speed: 700,

  loop: true,

  spaceBetween: 200,

});


const swiperBlog = new Swiper(".swiper-blog", {

  pagination: {
    el: '.swiper-pagination-blog',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next-blog',
    prevEl: '.swiper-button-prev-blog',
    clickable: true,
  },

  speed: 600,

});


const swiperQuotes = new Swiper(".swiper-quotes", {

  pagination: {
    el: ".swiper-pagination-quotes",
    clickable: true,
  },

  speed: 600,

  centeredSlides: true,

  spaceBetween: 100,

});


//accordion
accordion1.onclick = function () {
  accordion1.classList.toggle("accordion__title_active");
  accordion__body1.classList.toggle("accordion__body_active");
}
accordion2.onclick = function () {
  accordion2.classList.toggle("accordion__title_active");
  accordion__body2.classList.toggle("accordion__body_active");
}
accordion3.onclick = function () {
  accordion3.classList.toggle("accordion__title_active");
  accordion__body3.classList.toggle("accordion__body_active");
}
accordion4.onclick = function () {
  accordion4.classList.toggle("accordion__title_active");
  accordion__body4.classList.toggle("accordion__body_active");
}
accordion5.onclick = function () {
  accordion5.classList.toggle("accordion__title_active");
  accordion__body5.classList.toggle("accordion__body_active");
}