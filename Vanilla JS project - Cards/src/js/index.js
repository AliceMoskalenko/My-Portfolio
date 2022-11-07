import LoginForm from "./class/LoginForm.js";
import Modal from "./class/Modal.js";
import createFiltrationInputGroup from "./class/Filtration.js";
import showAllcards from "./api/getAllCards.js";

function isLogined() {
  if (localStorage.getItem("token") !== null) {
    let createVisitBtn = document
      .querySelector(".btn-create-visit")
      .classList.toggle("visually-hidden");
    let filtrationInput = new createFiltrationInputGroup().render();
    showAllcards();
  } else {
    let loginBtn = document.querySelector(".login-btn");
    loginBtn.classList.toggle("visually-hidden");
    let newLoginForm = new LoginForm().render();
  }
}

function createModalOnPage() {
  let createVisitBtn = document.querySelector(".btn-create-visit");
  let modalWrapper = document.querySelector(".modal-wrapper");

  createVisitBtn.addEventListener("click", () => {
    modalWrapper.classList.toggle("visually-hidden");
    let createVisitForm = new Modal().render();
  });
}

createModalOnPage();
isLogined();
