$(function () {
  $(".testimonials__inner").slick({
    dots: true,
    arrows: true,
    prevArrow:
      '<button type="button" class="testimonials__arrow testimonials__arrow--prev"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.19676 18.0492L0.450821 10.3033C-0.150273 9.69905 -0.150273 8.72311 0.450821 8.11889L8.19676 0.372949C8.77613 -0.124317 9.63285 -0.124317 10.2122 0.372949C10.8614 0.929121 10.9372 1.90818 10.3811 2.55732L3.73512 9.20334L10.3811 15.8648C10.9822 16.469 10.9822 17.445 10.3811 18.0492C9.77691 18.6503 8.8009 18.6503 8.19676 18.0492Z" fill="#C2C2C2"/></svg></button >',
    nextArrow:
      '<button type="button" class="testimonials__arrow testimonials__arrow--next"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.63518 0.450798L10.3811 8.19674C10.9822 8.80095 10.9822 9.77689 10.3811 10.3811L2.63518 18.1271C2.05581 18.6243 1.19909 18.6243 0.619717 18.1271C-0.0294237 17.5709 -0.105284 16.5918 0.450888 15.9427L7.09682 9.29666L0.45081 2.63517C-0.150285 2.03095 -0.150285 1.05502 0.45081 0.450798C1.05503 -0.150295 2.03104 -0.150295 2.63518 0.450798Z" fill="#C2C2C2"/></svg></button>',
    appendArrows: ".testimonials__arrows-wrap",
  });
});

const headerEl = document.querySelector(".header");
window.addEventListener("scroll", function () {
  const scrollPos = this.window.scrollY;
  if (scrollPos > 100) {
    headerEl.classList.add("fixed");
  } else {
    headerEl.classList.remove("fixed");
  }
});



document.addEventListener('DOMContentLoaded', () => {  
  const burger = document.querySelector('.burger'); 
  const mobileMenu = document.querySelector('.burger__menu'); 
  const bodyLock = document.querySelector('body'); 

  const closeBurger = document.querySelector('.burger__menu-close');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('burger__menu--active'); 
    if (mobileMenu.classList.contains('burger__menu--active'))  { 
      bodyLock.classList.add('lock'); 
    }
  });

  closeBurger.addEventListener("click", () => {
    mobileMenu.classList.remove("burger__menu--active");
    bodyLock.classList.remove("lock");
  });

  document.addEventListener("click", function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      mobileMenu.classList.remove("burger__menu--active");
      bodyLock.classList.remove("lock");
    }
  });

  mobileMenu.addEventListener("click", function (e) {
    e.stopPropagation();
});
});
// ---------------------------
$(window).on('load resize', function () {
  if ($(window).width() < 560) {
    $('.restorant__content:not(.slick-initialized)').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
    });
  } else {
    $(".restorant__content.slick-initialized").slick("unslick");
  }
});


  // -----------------------------------
var mixer = mixitup(".popular__content");
// ----------------------------------------------------

// document.addEventListener('DOMContentLoaded', () => {

//   //Mobile Menu
//   const burger = document.querySelector('.burger'); //наша кнопка
//   const mobileMenu = document.querySelector('.menu'); //мобильное меню
//   const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА
//   const burgerClose = document.querySelector(".burger-close");

//     burger.addEventListener("click", () => {
//     mobileMenu.classList.add("menu--active");
//     if (mobileMenu.classList.contains("menu--active")) {
//       bodyLock.classList.add("lock");
//     }
//   });

//   burgerClose.addEventListener("click", () => {
//     mobileMenu.classList.remove("menu--active");
//     bodyLock.classList.remove("lock");
//   });

//   document.addEventListener("click", function (e) {
//     if (e.target !== burger && e.target !== mobileMenu) {
//       mobileMenu.classList.remove("menu--active");
//       bodyLock.classList.remove("lock");
//     }
//   });

//   mobileMenu.addEventListener("click", function (e) {
//     e.stopPropagation();
// });
// });
// --------------------------------------------------------
  
// $(".burger, .menu__list").on("click", function () {
//   $(".menu__list").toggleClass("menu__list--active");
//   $(".burger__line").toggleClass("active");
//   $("body").toggleClass("lock");
// });


// document.addEventListener('DOMContentLoaded', () => {	
//   const burger = document.querySelector('.burger');   
//   burger.addEventListener('click', () => {	
//   burger.classList.toggle('burger--active'); 
//   });
// });

