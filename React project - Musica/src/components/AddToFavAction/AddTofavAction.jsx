import React, { useEffect } from "react";
import PropTypes from "prop-types";


import {
  payloadDataToStorage,
  deletPayloadedElementsFromStorage,
} from "../HandleLocalStorage/HandleLocalStorage.jsx";


export const AddToFavAction = ({ id }) => {
  return (
    <>
      <div
        className={`card__add-to-selected-icon not-selected-icon selection-${id}`}
        onClick={() => {
          HandleSelectedActions(id);
        }}
      ></div>
    </>
  );
};

export const HandleSelectedActions = (id) => {
  let selectedItem = document.querySelector(`.selection-${id}`);
  let card = document.querySelector(`.card-${id}`);
  let value = `${id}`;

  if (selectedItem && selectedItem.classList.contains("not-selected-icon")) {
    payloadDataToStorage("favourite", value);
    selectedItem.classList.remove("not-selected-icon");
    selectedItem.classList.add("selected-icon");
    card.classList.add("selected-fav-item");
  } else if (selectedItem && selectedItem.classList.contains("selected-icon")) {
    deletPayloadedElementsFromStorage("favourite", value);
    selectedItem.classList.remove("selected-icon");
    selectedItem.classList.add("not-selected-icon");
    card.classList.remove("selected-fav-item");
  }
};

export const HandleSelectedOnLoad = () => {
  useEffect(() => {
    let storageArr = JSON.parse(localStorage.getItem("favourite") || "[]");
    let icon = document.querySelector(".card__add-to-fav");

    if (storageArr.length > 0 && icon) {
      storageArr.forEach((element) => {
        let selectedItem = document.querySelector(`.selection-${element}`);
        let card = document.querySelector(`.card-${element}`);
        selectedItem && selectedItem.classList.remove("not-selected-icon");
        selectedItem.classList.add("selected-icon");
        card.classList.add("selected-fav-item");
      });
    }
  },);
};

AddToFavAction.propTypes = {
  id: PropTypes.string,
};
