import Cards from "../class/Card.js";

export default async function createCard(payload) {
  let token = localStorage.getItem("token");
  console.log(payload);
  let postPayloadRequest = await fetch(
    "https://ajax.test-danit.com/api/v2/cards",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    }
  )
    .then((response) => response.json())
    .then((response) => new Cards().getCardbyID(response.id))
    
}



// function selectedPayload() {
//   let doctorSelector = document.querySelector(".doctor-select");
//   let doctorSelectValue = doctorSelector.value;
//   if (doctorSelector.value == content.cardiologistSelect) {
//     let cardiologistValue = new Visit().compilateInputsCardiologist();
//     console.log(cardiologistValue);
//     return cardiologistValue;
//   } else if (doctorSelectValue == content.therapistSelect) {
//     let therapistValue = new Visit().compilateInputsTherapist();
//     return therapistValue;
//   } else if (doctorSelectValue == content.dentistSelect) {
//     let dentistValue = new Visit().compilateInputsDentist();
//     return dentistValue;
//   }
// }

//запись ID 
