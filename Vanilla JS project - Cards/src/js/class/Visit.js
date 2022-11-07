import * as doctorsVisit from "../class/DoctorsVisits.js";

export default class Visit {
  getPayload() {
    // Метод загрузки данных на сервер
    return;
  }

  getShortCardContent() {
    return ` <div class='card-decorative-element'></div>
    <div class='card-close-btn' id="${this.id}"  data-close='${this.id}'></div>
    <div class='editing-content-${this.id}'></div>
    <div class='open-editing-btns-${this.id} open-editing-btns visually-hidden'><button  class='confirm-editing-card-btn btn btn-primary'>Подтвердить изменения</button>
    <button class='cancel-editing-crad-btn btn btn-primary'>Отменить</button> </div>
    <div class='card-content-wrap card-${this.id}-content-wrap'>
    <p class='card-content'> Карточка визита к доктору:<span class='card-content-user-data'> 
     ${this.doctor} 
     </span></p>
     <p class='card-content'>ФИО:<span class='card-content-user-data'>  
     ${this.nameSurname} 
     </span></p>
     <div class ='cards-expanded-content'></div>
    <div class='cards-btn-wrap'> 
    <button onclick="this.disabled=true;" class='show-crad-content btn btn-primary'>Показать больше</button>
    <button data-edit='${this.id}' class='edit-crad-content btn btn-primary'>Редактировать</button> 
    </div></div>`;
  }

  getCommonExpandedCardContent() {
    return `
   <p class='card-content'>Цель визита:
   <span class='card-content-user-data'>  ${this.visitPurpose} </span> 
   </p>
   <p class='card-content'>Описание визита:
   <span class='card-content-user-data'>  ${this.visitDescription} </span> 
   </p>
   <p class='card-content'>Срочность визита: 
   <span class='card-content-user-data'>${this.showVisitPriority()} </span> 
   </p>
   <p class='card-content'>Статус визита: 
   <span class='card-content-user-data'>${this.showVisitStatus()} </span> 
   </p>`;
  }

  getDoctorsCardContent() {
    return;
  }

  showVisitPriority() {
    if (this.visitPriority == "high") {
      return "Неотложная";
    } else if (this.visitPriority == "normal") {
      return "Приоритетная";
    } else if (this.visitPriority == "low") {
      return "Обычная";
    }
  }

  showVisitStatus() {
    if (this.visitStatus == "visitOpen") {
      return "Назначен";
    } else {
      return "Завершен";
    }
  }

  getDoctorsEditingFields() {
    return;
  }
}
