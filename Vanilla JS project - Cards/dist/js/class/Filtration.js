import CreateElementOnPage from "./CreateElementClass.js";
import {priopitySelector, visitStatus} from '../function/Content.js'

export default class createFiltrationInputGroup extends CreateElementOnPage {
    constructor(tagname, content, accommodationId, className) {
        super(tagname, content, accommodationId, className);
        this.tagname = tagname;
        this.content = content;
        this.accommodationId = accommodationId;
        this.className = className;
      }

render(){
let content = `<input type="text" class="filtration-input"  placeholder="Поиск по заголовку/содержимому визита">
${visitStatus} ${priopitySelector}`
let filtrationSection = document.querySelector(`.filtration-section`);
let filtrationGroup = new CreateElementOnPage(`div`, content, filtrationSection, 'filtration-wrapper').render();
}
}