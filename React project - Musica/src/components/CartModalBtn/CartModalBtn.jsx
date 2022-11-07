import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { payloadDataToStorage } from "../HandleLocalStorage/HandleLocalStorage";
import {
  actionGetCardId,
  actionIncreaseCounter,
  actionToggleModal
} from "../../reducers";
import { getCardId, selectisModalCart } from "../../selects";
import Modal from "../Modal";

const CartModalBtn = ({ id }) => {
  const modalTitle = "Add this album to cart";
  const modalMainText =
    "Are you sure that you want to add this album to your shopping cart?";

  const cardId = useSelector(getCardId);
  const isModal = useSelector(selectisModalCart);

  const dispatch = useDispatch();

  let showHideModalWindow = () => {
    dispatch(actionToggleModal( "cart"));

  };

  let setSelectedCard = (id) => {
    dispatch(actionGetCardId(id));
  };

  let createModal = (id) => {
    showHideModalWindow();
    setSelectedCard(id);
  };

  let handleClickConfirm = () => {
    const storageName = "cart";
    dispatch(actionIncreaseCounter());
    payloadDataToStorage(storageName, cardId.payload);
  };

  let ModalFooterBtns = () => {
    return (
      <>
        <button
          type="button"
          className={`modalFooterBtn modalConfirm`}
          onClick={() => {
            handleClickConfirm();
            showHideModalWindow();
          }}
        >
          Yes!
        </button>
        <button
          type="button"
          className="modalFooterBtn modalCloseBtn"
          onClick={() => {
            showHideModalWindow();
          }}
        >
          No, thanks
        </button>
      </>
    );
  };

  return (
    <>
      {" "}
      <button
        className={`card__btn btn-primary add-to-cart-${id}`}
        id={`${id}`}
        onClick={() => {
          createModal(id);
        }}
      >
        {" "}
        Add to cart
      </button>
      {isModal === true && (
        <div className="modalWrap">
          <div>
            <Modal
              title={modalTitle}
              mainText={modalMainText}
              closeModal={showHideModalWindow}
              modalBtns={<ModalFooterBtns />}
            />
          </div>
          <div
              className="modalBackground"
              onClick={() => {
                showHideModalWindow();
              }}
            ></div>
        </div>
      )}
    </>
  );
};

export default CartModalBtn;
