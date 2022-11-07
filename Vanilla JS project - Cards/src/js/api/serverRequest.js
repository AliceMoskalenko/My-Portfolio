// {"email":"alisa1@test.ua",
// "password":"123456"}

// let token = `94b131bd-5645-41df-8e5f-fd5172a2915c`;
import LoginFormErrorMessage from "../class/ShowErrors.js";
import createFiltrationInputGroup from "../class/Filtration.js";

export default async function GetLogIn() {
  let emailValue = document.querySelector(".user-email-value").value;
  let passworValue = document.querySelector(".password-value").value;

  let postRequest = await fetch(
    "https://ajax.test-danit.com/api/v2/cards/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: `${emailValue}`,
        password: `${passworValue}`,
      }),
    }
  ).then(function (response) {
    if (response.status == 200) {
      response.text().then(function (data) {
        localStorage.setItem("token", data), toggleBnt();
        closeLoginForm();
        let filtrationInput = new createFiltrationInputGroup().render();
      });
    } else if (response.status == 401) {
      let errorMessage = document.querySelector(".loginError");
      if (errorMessage) {
        errorMessage.remove();
      }
      let newError = new LoginFormErrorMessage().render();
    } else {
      alert("Что-то пошло не так");
    }
  });
}
function toggleBnt() {
  let loginBtn = document.getElementById("loginBtn");
  let createVisitBtn = document.querySelector(".btn-create-visit");
  loginBtn.classList.toggle("visually-hidden");
  createVisitBtn.classList.toggle("visually-hidden");
}

function closeLoginForm() {
  let loginForm = document.querySelector(".login-form");
  loginForm.classList.add("visually-hidden");
}

let token = localStorage.getItem("token"); //null при загрузке страницы, если вход в первый раз.
