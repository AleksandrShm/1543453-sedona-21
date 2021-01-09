/* Модальные окна */

let formName = document.querySelector("#name");
let formSurname = document.querySelector("#surname");
let formTel = document.querySelector("#tel");
let formEmail = document.querySelector("#email");
let failurePopup = document.querySelector(".modal--failure");
let successPopup = document.querySelector(".modal--success");
let modalsClose = document.querySelectorAll(".modal__button");
let modalLink = document.querySelector(".form__button");

modalLink.addEventListener("click", function (evt) {
  if (!formName.value || !formSurname.value || !formTel.value || !formEmail.value) {
    evt.preventDefault();
    failurePopup.classList.add("modal--open");
    formName.classList.add("form__input--warning");
    formSurname.classList.add("form__input--warning");
    formTel.classList.add("form__input--warning");
    formEmail.classList.add("form__input--warning");
  } else {
    successPopup.classList.add("modal--open");
  }
});

for(let i = 0; i < modalsClose.length; i++) {
  modalsClose[i].addEventListener("click", function (evt) {
    if (failurePopup.classList.contains("modal--open")) {
      evt.preventDefault();
      failurePopup.classList.remove("modal--open");
    }
    if (successPopup.classList.contains("modal--open")) {
      evt.preventDefault();
      successPopup.classList.remove("modal--open");
    }
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (failurePopup.classList.contains("modal--open")) {
      evt.preventDefault();
      failurePopup.classList.remove("modal--open");
    }
    if (successPopup.classList.contains("modal--open")) {
      evt.preventDefault();
      successPopup.classList.remove("modal--open");
    }
  }
});
