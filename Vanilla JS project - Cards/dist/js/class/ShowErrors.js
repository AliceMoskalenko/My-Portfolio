import CreateElementOnPage from "./CreateElementClass.js";

export default class LoginFormErrorMessage extends CreateElementOnPage {
  constructor(tagname, content, accommodationId, className) {
    super(tagname, content, accommodationId);
    this.tagname = tagname;
    this.content = content;
    this.accommodationId = accommodationId;
    this.className = className;
  }
  render() {
    let loginUserNotFoundError = new CreateElementOnPage(
      `div`,
      `Неверно указан пароль или логин`,
      exampleInputPassword1,
      "loginError"
    ).render();
  }
}
