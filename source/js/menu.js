/* Навигационное меню */

let navMenu = document.querySelector(".main-nav");
let navToggle = navMenu.querySelector(".main-nav__toggle");

navMenu.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (navMenu.classList.contains("main-nav--closed")) {
    navMenu.classList.remove("main-nav--closed");
    navMenu.classList.add("main-nav--opened");
  } else {
    navMenu.classList.remove("main-nav--opened");
    navMenu.classList.add("main-nav--closed");
  }
});
