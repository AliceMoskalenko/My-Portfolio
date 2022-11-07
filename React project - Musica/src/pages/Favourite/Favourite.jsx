import React, { useState } from "react";
import "./Favourite.scss";
import { useSelector, useDispatch } from "react-redux";

import { getData, selectisModalFavourite, getCardId } from "../../selects";
import { actionToggleModal, actionGetCardId } from "../../reducers";

import ProductCard from "../../components/ProductCard";
import CartModalBtn from "../../components/CartModalBtn/CartModalBtn.jsx";
import {
  HandleSelectedOnLoad,
  HandleSelectedActions,
} from "../../components/AddToFavAction/AddTofavAction.jsx";
import Modal from "../../components/Modal";
import "./Favourite.scss";

const Favourite = () => {
  const [change, setChange] = useState(false);
  const dispatch = useDispatch();
  let cardId = useSelector(getCardId);
  const storageName = "favourite";
  const key = "favKey";

  let storageArr = JSON.parse(localStorage.getItem(storageName) || "[]");
  let data = useSelector(getData);
  let isModal = useSelector(selectisModalFavourite);
  const modalTitle = "Remove from favourite?";
  const modalMainText =
    "Are you sure that you want to remove this album from your favourite list?";

  HandleSelectedOnLoad(storageName);

  let showHideModal = () => {
    dispatch(actionToggleModal("favourite"));
  };

  return (
    <>
      {" "}
      <section className="favourite-section">
        <h2 className="favourite-section__title common-title">
          {" "}
          Favourite music Albums:{" "}
        </h2>
        {storageArr.length <= 0 && (
          <p className="favourite-section__noItemsMessage common-subtitle">
            {" "}
            No items added yet{" "}
          </p>
        )}
        <div className="favourite-section__cards-wrap">
          {storageArr.length > 0 &&
            data.map((element) => {
              return (
                storageArr.includes(element.id) &&
                true && (
                  <div
                    className="favourite-section__card-wrap"
                    key={key + "wrap" + element.id}
                  >
                    {" "}
                    <ProductCard
                      key={key + element.id}
                      name={element.name}
                      price={element.price}
                      url={element.url}
                      id={element.id}
                      colour={element.colour}
                      btn={<CartModalBtn id={element.id} />}
                      features={
                        <>
                          <button
                            className={`favourite-section__remove-from-fav-btn btn-primary selection-${element.id}`}
                            onClick={() => {
                              dispatch(actionGetCardId(element.id));
                              showHideModal();
                            }}
                          >
                            {" "}
                            Remove from favourite{" "}
                          </button>
                        </>
                      }
                    />
                    {isModal === true && (
                      <div className="modalWrap">
                        <div>
                          <Modal
                            title={modalTitle}
                            mainText={modalMainText}
                            closeModal={showHideModal}
                            modalBtns={
                              <>
                                <button
                                  className={`cart-section__remove-from-fav-btn btn-primary `}
                                  onClick={() => {
                                    showHideModal();
                                    setChange(!change);
                                    HandleSelectedActions(cardId.payload);
                                  }}
                                >
                                  Remove
                                </button>

                                <button
                                  className={`cart-section__remove-from-fav-btn btn-secondary`}
                                  onClick={() => {
                                    showHideModal();
                                  }}
                                >
                                  No
                                </button>
                              </>
                            }
                          />
                        </div>
                        <div
                          className="modalBackground"
                          onClick={() => {
                            showHideModal();
                          }}
                        ></div>
                      </div>
                    )}
                  </div>
                )
              );
            })}
        </div>
      </section>{" "}
    </>
  );
};

export default Favourite;
