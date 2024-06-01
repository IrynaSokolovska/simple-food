$(function () {
  $(".testimonials__inner").slick({
    dots: true,
    arrows: false,
  });
});

const headerEl = document.querySelector(".header__inner");
window.addEventListener("scroll", function () {
  const scrollPos = this.window.scrollY;
  if (scrollPos > 100) {
    headerEl.classList.add("header__inner--fixed");
  } else {
    headerEl.classList.remove("header__inner--fixed");
  }
});

var mixer = mixitup(".popular__content");
