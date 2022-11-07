import CreateElementOnPage from "./CreateElementClass.js";
import * as content from "../function/Content.js";
import * as doctorsVisit from "./DoctorsVisits.js";
import Visit from "./Visit.js";
import createCard from "../api/modalPostPayload.js";

export default class Modal extends CreateElementOnPage {
  constructor(tagname, content, accommodationId, className) {
    super(tagname, content, accommodationId, className);
    this.tagname = tagname;
    this.content = content;
    this.accommodationId = accommodationId;
    this.className = className;
  }
  render() {
    let mainContent = `${content.commonDoctorsInput} <div class="doctor-selected-content">${content.cardiologistVisit}</div> ${content.createVisitFormSelectorsAndBtns} <div class="overlay"></div>`;
    let modalWrapper = document.querySelector(".modal-wrapper");
    let visitForm = new CreateElementOnPage(
      `form`,
      mainContent,
      modalWrapper,
      "form-create-visit"
    ).render();
    this.handleContentByDoctorSelect();
    this.handleFormActions();
  }

  handleContentByDoctorSelect() {
    let doctorSelector = document.querySelector(".doctor-select");
    doctorSelector.addEventListener("change", () => {
      let doctorSelector = document.querySelector(".doctor-select");
      let doctorSelectValue = doctorSelector.value;
      if (doctorSelector.value == content.cardiologistSelect) {
        this.clearInputs();
        this.createCardiologistInputs();
      } else if (doctorSelectValue == content.therapistSelect) {
        this.clearInputs();
        this.createTherapistInputs();
      } else if (doctorSelectValue == content.dentistSelect) {
        this.clearInputs();
        this.createDentistInputs();
      }
    });
  }

  createCardiologistInputs() {
    let accommodationPlace = document.querySelector(
      ".create-visit-expanded-accomodation-place"
    );

    let cardiologistContent = new CreateElementOnPage(
      "div",
      content.cardiologistVisit,
      accommodationPlace,
      "doctor-selected-content"
    ).render();
  }
  createDentistInputs() {
    let accommodationPlace = document.querySelector(
      ".create-visit-expanded-accomodation-place"
    );
    let dentistContent = new CreateElementOnPage(
      "div",
      content.dentistVisit,
      accommodationPlace,
      "doctor-selected-content"
    ).render();
  }
  createTherapistInputs() {
    let accommodationPlace = document.querySelector(
      ".create-visit-expanded-accomodation-place"
    );
    let therapistContent = new CreateElementOnPage(
      "div",
      content.therapistVisit,
      accommodationPlace,
      "doctor-selected-content"
    ).render();
  }

  getDoctorVisit() {
    let doctorSelect = document.querySelector(".doctor-select").value;

    if (doctorSelect == content.cardiologistSelect) {
      return this.getCardiologistVisit();
    } else if (doctorSelect == content.therapistSelect) {
      return this.getTherapistVisit();
    } else if (doctorSelect == content.dentistSelect) {
      return this.getDentistVisit();
    }
  }

  getCommonInputs() {
    let nameSurname = document.querySelector(".input-name-surname ").value;
    let visitPurpose = document.querySelector(".input-visit-purpose").value;
    let visitDescription = document.querySelector(
      ".input-visit-description"
    ).value;
    let doctorselect = document.querySelector(".doctor-select").value;
    let visitPriority = document.querySelector(".priority-selector").value;

    return [
      nameSurname,
      visitPurpose,
      visitDescription,
      doctorselect,
      visitPriority,
    ];
  }

  getCardiologistVisit() {
    let inputAge = document.querySelector(".input-age").value;
    let inputBMI = document.querySelector(".input-BMI").value;
    let inputHeartDiseases = document.querySelector(
      ".input-heart-diseases"
    ).value;
    let commonInputs = this.getCommonInputs();

    return doctorsVisit.VisitCardiologist.createFromInputs(
      ...commonInputs,
      inputAge,
      inputBMI,
      inputHeartDiseases
    );
  }

  getDentistVisit() {
    let inputLastVisit = document.querySelector(".input-last-visit").value;
    let commonInputs = this.getCommonInputs();

    return doctorsVisit.VisitDentist.createFromInputs(
      ...commonInputs,
      inputLastVisit
    );
  }

  getTherapistVisit() {
    let inputAge = document.querySelector(".input-age").value;

    let commonInputs = this.getCommonInputs();
    return doctorsVisit.VisitTherapist.createFromInputs(
      ...commonInputs,
      inputAge
    );
  }

  handleFormActions() {
    let closeModalBtn = document.querySelector(
      ".btn-close-creating-visit-form"
    );
    let main = document.querySelector(".main");
    let mainCloseClick = function mainCloseModal(e) {
      let modalWrapper = document.getElementById("modalWrapper");
      let modalForm = document.querySelector(".form-create-visit");
      const withinBoundaries = e.composedPath().includes(modalForm);
      if (!withinBoundaries) {
        modalForm.remove();
        modalWrapper.classList.add("visually-hidden");
        main.removeEventListener("click", mainCloseClick);
      }
    };

    closeModalBtn.addEventListener("click", () => {
      let modalWrapper = document.getElementById("modalWrapper");
      let modalForm = document.querySelector(".form-create-visit");
      modalForm.remove();
      modalWrapper.classList.add("visually-hidden");
      main.removeEventListener("click", mainCloseClick);
    });

    main.addEventListener("click", mainCloseClick);

    let submitModalBtn = document.querySelector(".btn-submit-visit");
    submitModalBtn.addEventListener("click", () => {
      let modalWrapper = document.getElementById("modalWrapper");
      let modalForm = document.querySelector(".form-create-visit");
      modalWrapper.classList.add("visually-hidden");
      main.removeEventListener("click", mainCloseClick);
      let doctorVisit = this.getDoctorVisit();

      let payload = doctorVisit.getPayload();
      createCard(payload);

      modalForm.remove();
    });
  }

  clearInputs() {
    let doctorContentInputs = document.querySelector(
      ".doctor-selected-content"
    );
    if (doctorContentInputs) {
      doctorContentInputs.remove();
    }
  }
}
