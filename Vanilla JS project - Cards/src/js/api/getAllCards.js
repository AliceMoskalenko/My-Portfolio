import Cards from "../class/Card.js";
import * as DoctorVisit from "../class/DoctorsVisits.js";

export default async function getAllCardsId() {
  let token = localStorage.getItem("token");

  fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => showAllcards(response));
}

export function showAllcards(arrayData) {
  let noItemsText = document
  .querySelector(".no-items-text")
  if (arrayData.length !== 0 ) {
    arrayData.forEach((element) => {
      let allCards = new Cards().createCardOnPage(
        DoctorVisit.getDoctorsVisitFromServerData(element)
      );
      if(element.cardOwner){
        noItemsText.classList.add("visually-hidden");
      }
    });
    console.log(arrayData);
  } else if (arrayData.length == 0){
    noItemsText.classList.remove("visually-hidden");
  }
}
