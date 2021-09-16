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
$(function () {

  $(".accordion__body").hide();

  $(".accordion__header").click(function () {
    let accordBody = $(this).next();
    $(accordBody).toggle(400);
    $(this).toggleClass("accordion__header_active");
  });

});