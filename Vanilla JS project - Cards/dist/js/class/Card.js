import CreateElementOnPage from "./CreateElementClass.js";
import * as DoctorVisit from "./DoctorsVisits.js";


export default class Cards extends CreateElementOnPage {
  constructor(tagname, content, accommodationId, className) {
    super(tagname, content, accommodationId, className);
    this.tagname = tagname;
    this.content = content;
    this.accommodationId = accommodationId;
    this.className = className;
  }

  async getCardbyID(cardId) {
    let token = localStorage.getItem("token");
    let getCard = await fetch(
      `https://ajax.test-danit.com/api/v2/cards/${cardId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((response) => this.render(response));
  }

  render(data) {
    this.createCardOnPage(DoctorVisit.getDoctorsVisitFromServerData(data));
    this.deleteCardByClick(data.id);
  }

  createCardOnPage(doctor) {
    if (doctor == undefined) {
      return;
    }

    let shortCardContent = doctor.getShortCardContent();
    let cardsWrapper = document.querySelector(".visit-card-wrapper");
    let newCard = new CreateElementOnPage(
      `div`,
      shortCardContent,
      cardsWrapper,
      `visit-card`
    ).render();

    let newCardWrap = document.querySelector(".visit-card");
    newCardWrap.classList.add(`card-wrap-${doctor.id}`);
    newCardWrap.dataset.close = `${doctor.id}`;
    newCardWrap.dataset.edit = `${doctor.id}`;

    let noItemsText = document
      .querySelector(".no-items-text")
      .classList.add("visually-hidden");

    this.showExpandedCardContent(doctor);
    this.deleteCardByClick(doctor.id);
    this.editCard(doctor);
    this.cardsFiltration(doctor);
  }

  showExpandedCardContent(doctor) {
    let showMoreBtn = document.querySelector(".show-crad-content");
    let expandedContentWrap = document.querySelector(".cards-expanded-content");
    let expandedCardContent = doctor.getDoctorsCardContent();
    showMoreBtn.addEventListener("click", () => {
      let expandCardContent = new CreateElementOnPage(
        `div`,
        expandedCardContent,
        expandedContentWrap,
        `visit-card-expanded`
      ).render();
    });
  }

  deleteCardByClick(cardId) {
    let token = localStorage.getItem("token");
    let deleteBtn = document.getElementById(`${cardId}`);
    deleteBtn.addEventListener("click", () => {
      let deleteConfirm = confirm(
        "Внимание, вы собираетесь удалить карточку визита. Подтвердить дейтсвие?"
      );
      if (deleteConfirm) {
        let cardWrap = document.querySelector(`.card-wrap-${cardId}`);
        if (deleteBtn.dataset.close == `${cardId}`) {
          cardWrap.remove();
        }
        fetch(`https://ajax.test-danit.com/api/v2/cards/${cardId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    });
  }

  editCard(data) {
    let editBtn = document.querySelector(".edit-crad-content");
    editBtn.addEventListener("click", () => {
      if (editBtn.dataset.edit == `${data.id}`) {
        let textCardContent = document.querySelectorAll(
          `.card-${data.id}-content-wrap`
        );
        textCardContent.forEach((element) => {
          element.classList.add("visually-hidden");
        });
        let editBtns = document
          .querySelector(`.open-editing-btns-${data.id}`)
          .classList.remove("visually-hidden");
        let doctorsContentEditing =
          DoctorVisit.getDoctorsVisitFromServerData(
            data
          ).getDoctorsEditingFields();

        let EditingContent = ` 
        <p class='card-content'> Карточка визита к доктору:<span class='card-content-user-data'> 
        ${data.doctor} 
        </span></p>

        <select class="form-select priority-selector-editing selector-editing" aria-label="Default select example">
  <option value="high">Неотложная</option>
  <option value="normal">Приоритетная</option>
  <option value="low">Обычная</option>
  </select>

  <select class="form-select form-select-visit-status-editing visit-status-selector-editing" aria-label="Default select example">
<option value="open">Назначен</option>
<option value="done">Завершен</option>
</select>
 
  <p>ФИО:</p>
  <input type="text" class="form-control margin-bottom input-name-surname-editing" required value="${data.nameSurname}" aria-label="Example text with button addon">
  <p>Цель визита:</p>
<input type="text" class="form-control margin-bottom input-visit-purpose-editing" value="${data.visitPurpose}" required aria-label="Example text with button addon">
<p>Короткое описание визита:</p>
<input type="text" class="form-control margin-bottom input-visit-description-editing" value="${data.visitDescription}" required aria-label="Example text with button addon">
${doctorsContentEditing} 
`;
        let accommodationPlace = document.querySelector(
          `.editing-content-${data.id}`
        );
        let editingCardFields = new CreateElementOnPage(
          `div`,
          EditingContent,
          accommodationPlace,
          `edinitg-card-fields-wrap`
        ).render();
      }
      //Clickarea
    });
    this.handleEditingClicks(data);
  }

  getCommonInputsEdit(data) {
    let nameSurname = document.querySelector(
      ".input-name-surname-editing "
    ).value;
    let visitPurpose = document.querySelector(
      ".input-visit-purpose-editing"
    ).value;
    let visitDescription = document.querySelector(
      ".input-visit-description-editing"
    ).value;
    let visitPriority = document.querySelector(
      ".priority-selector-editing"
    ).value;
    let visitStatus = document.querySelector(
      ".visit-status-selector-editing"
    ).value;
    let id = data.id;
    return [
      nameSurname,
      visitPurpose,
      visitDescription,
      visitPriority,
      visitStatus,
      id,
    ];
  }
  getCardiologistVisitEdit(data) {
    let inputAge = document.querySelector(".age-editing").value;
    let inputBMI = document.querySelector(".BMI-editing").value;
    let inputHeartDiseases = document.querySelector(
      ".heart-diseases-editing"
    ).value;
    let commonInputs = this.getCommonInputsEdit(data);

    return DoctorVisit.VisitCardiologist.updatefromInputs(
      ...commonInputs,
      inputAge,
      inputBMI,
      inputHeartDiseases
    );
  }

  getDentistVisitEdit(data) {
    let inputLastVisit = document.querySelector(".last-visit-editing").value;
    let commonInputs = this.getCommonInputsEdit(data);

    return DoctorVisit.VisitDentist.updatefromInputs(
      ...commonInputs,
      inputLastVisit
    );
  }

  getTherapistVisitEdit(data) {
    let inputAge = document.querySelector(".age-editing").value;

    let commonInputs = this.getCommonInputsEdit(data);

    return DoctorVisit.VisitTherapist.updatefromInputs(
      ...commonInputs,
      inputAge
    );
  }

  getDoctorVisitEdited(data) {
    let cardiologist = "Кардиолог";
    let therapist = "Терапевт";
    let dentist = "Стоматолог";
    if (data.doctor == cardiologist) {
      return this.getCardiologistVisitEdit(data);
    } else if (data.doctor == therapist) {
      return this.getTherapistVisitEdit(data);
    } else if (data.doctor == dentist) {
      return this.getDentistVisitEdit(data);
    }
  }

  handleEditingClicks(data) {
    let confirmEditingBtn = document.querySelector(".confirm-editing-card-btn");
    let token = localStorage.getItem("token");

    confirmEditingBtn.addEventListener("click", () => {
      let editedDoctorVisit = this.getDoctorVisitEdited(data);

      fetch(`https://ajax.test-danit.com/api/v2/cards/${data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editedDoctorVisit),
      });

      let cardWrap = document.querySelector(`.card-wrap-${data.id}`);
      cardWrap.classList.add("visually-hidden");
      this.createCardOnPage(this.getDoctorVisitEdited(data));
    });

    let cancelEditingBtn = document.querySelector(".cancel-editing-crad-btn");

    cancelEditingBtn.addEventListener("click", () => {
      this.handleClosingEditingCard(data);
    });
  }

  handleClosingEditingCard(data) {
    let edinitgFields = document.querySelector(".edinitg-card-fields-wrap");
    edinitgFields.remove();
    let edinitgBtns = document.querySelector(`.open-editing-btns-${data.id}`);
    edinitgBtns.classList.toggle("visually-hidden");
    let textCardContent = document.querySelectorAll(
      `.card-${data.id}-content-wrap`
    );
    textCardContent.forEach((element) => {
      element.classList.remove("visually-hidden");
    });
  }

  cardsFiltration(doctorVisit) {
    let input = document.querySelector(".filtration-input");
    let selectVisit = document.querySelector(".form-select-visit-status");
    let prioritySelector = document.querySelector(".priority-selector");

    input.addEventListener("keyup", () => {
      this.filtrationLogic(doctorVisit);
    });
    selectVisit.addEventListener("change", () => {
      this.filtrationLogic(doctorVisit);
    });
    prioritySelector.addEventListener("change", () => {
      this.filtrationLogic(doctorVisit);
    });
  }

  filtrationLogic(doctorVisit) {
    let input = document.querySelector(".filtration-input");
    let selectVisit = document.querySelector(".form-select-visit-status").value;
    let prioritySelector = document.querySelector(".priority-selector").value;

    let filter = input.value.toUpperCase();
    let filterElements = doctorVisit;
    let card = document.querySelector(`.card-wrap-${doctorVisit.id}`);
    card.classList.add("visually-hidden");

    Object.keys(doctorVisit).forEach(function (key) {
      let val = doctorVisit[key].toString().toUpperCase();
      let card = document.querySelector(`.card-wrap-${doctorVisit.id}`);
      if (
        val.indexOf(filter) > -1 &&
        filter.length !== 0 &&
        selectVisit == doctorVisit.visitStatus &&
        prioritySelector == doctorVisit.visitPriority
      ) {
        card.classList.remove("visually-hidden");
      } else if (filter.length == 0) {
        card.classList.remove("visually-hidden");
      } else if (card === null) {
        return;
      }
    });
  }
}
