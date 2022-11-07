import CreateElementOnPage from "./CreateElementClass.js";
import GetLogIn from "../api/serverRequest.js";

export default class LoginForm extends CreateElementOnPage {
  constructor(tagname, content, accommodationId, className) {
    super(tagname, content, accommodationId, className);
    this.tagname = tagname;
    this.content = content;
    this.accommodationId = accommodationId;
    this.className = className;
  }

  render() {
    let loginBtn = document.getElementById("loginBtn");
    loginBtn.addEventListener("click", () => {
      let header = document.getElementById(`header`);
      let content = `<form class='login-form' onSubmit="return false">
           <div class="mb-3">
             <label for="exampleInputEmail1" class="form-label">Введите свой email:</label>
             <input type="email" class="form-control user-email-value" id="exampleInputEmail1" aria-describedby="emailHelp">
           </div>
           <div class="mb-3">
             <label for="exampleInputPassword1" class="form-label">Введите свой пароль:</label>
             <input type="password" class="form-control password-value" id="exampleInputPassword1">
           </div>
           <button type="submit" class="btn btn-primary submit-btn">Войти</button>
         </form>`;
      let loginForm = new CreateElementOnPage(
        `div`,
        content,
        header,
        "login-form-container"
      ).render();
      let submitBtn = document.querySelector(".submit-btn");

      submitBtn.addEventListener("click", () => {
        this.AJAXRequest();
      });
    });
  }

  AJAXRequest() {
    GetLogIn();
  }
}
