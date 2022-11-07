export default class CreateElementOnPage {
  constructor(tagname, content, accommodationId, className) {
    this.tagname = tagname;
    this.content = content;
    this.accommodationId = accommodationId;
    this.className = className;
  }

  render() {
    this.CreateElement(
      this.tagname,
      this.content,
      this.accommodationId,
      this.className
    );
  }

  CreateElement(tagname, content, accommodationId, className) {
    let newElem = document.createElement(tagname);
    newElem.innerHTML = content;
    let HTMLElem = accommodationId;
    newElem.classList.add(className);
    HTMLElem.prepend(newElem);
  }
}
