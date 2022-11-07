import Visit from "./Visit.js";
import * as content from "../function/Content.js";

export class VisitDentist extends Visit {
  constructor(data) {
    super();
    this.nameSurname = data.nameSurname;
    this.visitPurpose = data.visitPurpose;
    this.visitDescription = data.visitDescription;
    this.doctorSelect = data.doctorSelect;
    this.visitPriority = data.visitPriority;
    this.lastVisit = data.lastVisit;
    this.id = data.id;
    this.doctor = "Стоматолог";
    this.visitStatus = data.visitStatus;
    this.cardOwner = data.cardOwner;
  }

  static createFromInputs(
    nameSurname,
    visitPurpose,
    visitDescription,
    doctorSelect,
    visitPriority,
    lastVisit,
    visitStatus
  ) {
    return new VisitDentist({
      nameSurname: nameSurname,
      visitPurpose: visitPurpose,
      visitDescription: visitDescription,
      doctorSelect: doctorSelect,
      visitPriority: visitPriority,
      lastVisit: lastVisit,
      visitStatus: "open",
      cardOwner: "Alice",
    });
  }

  static updatefromInputs(
    nameSurname,
    visitPurpose,
    visitDescription,
    visitPriority,
    visitStatus,
    id,
    lastVisit
  ) {
    return new VisitDentist({
      nameSurname: nameSurname,
      visitPurpose: visitPurpose,
      visitDescription: visitDescription,
      visitPriority: visitPriority,
      doctorSelect: "dentist",
      id: id,
      lastVisit: lastVisit,
      visitStatus: visitStatus,
      cardOwner: "Alice",
      doctor: "Стоматолог",
    });
  }

  getPayload() {
    return {
      nameSurname: this.nameSurname,
      visitPurpose: this.visitPurpose,
      visitDescription: this.visitDescription,
      doctorSelect: this.doctorSelect,
      visitPriority: this.visitPriority,
      lastVisit: this.lastVisit,
      visitStatus: this.visitStatus,
      cardOwner: this.cardOwner,
    };
  }

  getDoctorsCardContent() {
    return `<div class='card-content-wrap card-${
      this.id
    }-content-wrap'>${this.getCommonExpandedCardContent()}
    <p class='card-content'>Последнее посещение: 
    <span class='card-content-user-data'>${this.lastVisit} </span> 
    </p></div>
    `;
  }

  getDoctorsEditingFields() {
    return `
   <p>Дата последнего посещения:</p>
  <input type="text" class="form-control margin-bottom last-visit-editing" value="${this.lastVisit}" required aria-label="Example text with button addon">
   `;
  }
}

export class VisitTherapist extends Visit {
  constructor(data) {
    super();

    this.nameSurname = data.nameSurname;
    this.visitPurpose = data.visitPurpose;
    this.visitDescription = data.visitDescription;
    this.doctorSelect = data.doctorSelect;
    this.visitPriority = data.visitPriority;
    this.age = data.age;
    this.id = data.id;
    this.doctor = "Терапевт";
    this.visitStatus = data.visitStatus;
    this.cardOwner = data.cardOwner;
  }

  static createFromInputs(
    nameSurname,
    visitPurpose,
    visitDescription,
    doctorSelect,
    visitPriority,
    age,
    visitStatus
  ) {
    return new VisitTherapist({
      nameSurname: nameSurname,
      visitPurpose: visitPurpose,
      visitDescription: visitDescription,
      doctorSelect: doctorSelect,
      visitPriority: visitPriority,
      age: age,
      visitStatus: "open",
      cardOwner: "Alice",
      doctor: "Тперапевт",
    });
  }

  static updatefromInputs(
    nameSurname,
    visitPurpose,
    visitDescription,
    visitPriority,
    visitStatus,
    id,
    age
  ) {
    return new VisitTherapist({
      nameSurname: nameSurname,
      visitPurpose: visitPurpose,
      visitDescription: visitDescription,
      visitPriority: visitPriority,
      doctorSelect: "therapist",
      age: age,
      id: id,
      visitStatus: visitStatus,
      cardOwner: "Alice",
    });
  }

  getPayload() {
    return {
      nameSurname: this.nameSurname,
      visitPurpose: this.visitPurpose,
      visitDescription: this.visitDescription,
      doctorSelect: this.doctorSelect,
      visitPriority: this.visitPriority,
      age: this.age,
      visitStatus: this.visitStatus,
      cardOwner: this.cardOwner,
    };
  }

  getDoctorsCardContent() {
    return `<div class='card-content-wrap card-${this.id}-content-wrap'>
    ${this.getCommonExpandedCardContent()}
      <p class='card-content'>Возраст: 
      <span class='card-content-user-data'>${this.age} </span> 
      </p></div>
      `;
  }

  getDoctorsEditingFields() {
    return `
   <p>Возраст:</p>
  <input type="text" class="form-control margin-bottom age-editing" value="${this.age}" required aria-label="Example text with button addon">
   `;
  }
}

export class VisitCardiologist extends Visit {
  constructor(data) {
    super();
    this.nameSurname = data.nameSurname;
    this.visitPurpose = data.visitPurpose;
    this.visitDescription = data.visitDescription;
    this.doctorSelect = data.doctorSelect;
    this.visitPriority = data.visitPriority;
    this.age = data.age;
    this.BMI = data.BMI;
    this.heartDiseases = data.heartDiseases;
    this.id = data.id;
    this.doctor = "Кардиолог";
    this.visitStatus = data.visitStatus;
    this.cardOwner = data.cardOwner;
  }

  static createFromInputs(
    nameSurname,
    visitPurpose,
    visitDescription,
    doctorSelect,
    visitPriority,
    age,
    BMI,
    heartDiseases
  ) {
    return new VisitCardiologist({
      nameSurname: nameSurname,
      visitPurpose: visitPurpose,
      visitDescription: visitDescription,
      doctorSelect: doctorSelect,
      visitPriority: visitPriority,
      age: age,
      BMI: BMI,
      heartDiseases: heartDiseases,
      visitStatus: "open",
      cardOwner: "Alice",
      doctor: "Кардиолог",
    });
  }

  static updatefromInputs(
    nameSurname,
    visitPurpose,
    visitDescription,
    visitPriority,
    visitStatus,
    id,
    age,
    BMI,
    heartDiseases
  ) {
    return new VisitCardiologist({
      nameSurname: nameSurname,
      visitPurpose: visitPurpose,
      visitDescription: visitDescription,
      visitPriority: visitPriority,
      doctorSelect: "cardiologist",

      id: id,
      age: age,
      visitStatus: visitStatus,
      BMI: BMI,
      heartDiseases: heartDiseases,
      cardOwner: "Alice",
    });
  }

  getPayload() {
    return {
      nameSurname: this.nameSurname,
      visitPurpose: this.visitPurpose,
      visitDescription: this.visitDescription,
      doctorSelect: this.doctorSelect,
      visitPriority: this.visitPriority,
      age: this.age,
      BMI: this.BMI,
      heartDiseases: this.heartDiseases,
      visitStatus: this.visitStatus,
      cardOwner: this.cardOwner,
    };
  }

  getDoctorsCardContent() {
    return `<div class='card-content-wrap card-${this.id}-content-wrap'>
    ${this.getCommonExpandedCardContent()}
    <p class='card-content'>Возраст: 
    <span class='card-content-user-data'>${this.age} </span> 
    </p>
    <p class='card-content'>Индекс массы тела: 
    <span class='card-content-user-data'>${this.BMI} </span> 
    </p>
    <p class='card-content'>Перенесенные заболевания сердечно-сосудистой системы: 
    <span class='card-content-user-data'>${this.heartDiseases} </span> 
    </p></div>
    `;
  }

  getDoctorsEditingFields() {
    return `
   <p>Возраст:</p>
  <input type="text" class="form-control margin-bottom age-editing" value="${this.age}" required aria-label="Example text with button addon">
  <p>Индекс массы тела:</p>
  <input type="text" class="form-control margin-bottom BMI-editing" value="${this.BMI}" required aria-label="Example text with button addon">
  <p>Перенесенные заболевания сердечно-сосудистой системы: </p>
  <input type="text" class="form-control margin-bottom heart-diseases-editing" value="${this.heartDiseases}" required aria-label="Example text with button addon">  
  `;
  }
}

//////////////////////////////////////////////////////////

export function getDoctorsVisitFromServerData(response) {
  if (
    response.doctorSelect == content.cardiologistSelect &&
    response.cardOwner == "Alice"
  ) {
    return new VisitCardiologist(response);
  } else if (
    response.doctorSelect == content.therapistSelect &&
    response.cardOwner == "Alice"
  ) {
    return new VisitTherapist(response);
  } else if (
    response.doctorSelect == content.dentistSelect &&
    response.cardOwner == "Alice"
  ) {
    return new VisitDentist(response);
  }

  return;
}
