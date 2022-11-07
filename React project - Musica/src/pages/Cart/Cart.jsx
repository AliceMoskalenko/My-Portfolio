import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getData,
  getCardId,
  selectisModalDeleteFromCart,
  selectisModalBuyNow,
} from "../../selects";
import {
  actionResetCounter,
  actionGetCardId,
  actionToggleModal,
  actionDecreaseCounter,
} from "../../reducers";

import {
  deletPayloadedElementsFromStorage,
  clearStorage,
} from "../../components/HandleLocalStorage/HandleLocalStorage";
import ProductCard from "../../components/ProductCard";
import Modal from "../../components/Modal";
import "./cart.scss";

const Cart = () => {
  const storageName = "cart";
  const key = "key";
  const modalDeleteTitle = "Delete from Cart";
  const modalDeleteMainText =
    "Are you sure you want to remove it from yout shopping cart?";
  const modaltoBuyTitle = "Thanks";
  const modalToBuyMainText = "Thanks for your purchase! Enjoy your music";

  let storageArr = JSON.parse(localStorage.getItem(storageName) || "[]");
  let data = useSelector(getData);
  let cardId = useSelector(getCardId);
  const dispatch = useDispatch();

  let isModalDelete = useSelector(selectisModalDeleteFromCart);
  let isModalToBuy = useSelector(selectisModalBuyNow);

  let showHideModalToBuy = () => {
    dispatch(actionToggleModal("buyNow"));
  };

  let showHideModalToDelete = () => {
    dispatch(actionToggleModal("deleteFromCart"));
  };

  return (
    <>
      {" "}
      <section className="cart-section">
        <h2 className="cart-section__title common-title">
          {" "}
          Items in your cart:{" "}
        </h2>
        {storageArr.length <= 0 && (
          <p className="cart-section__noItemsMessage common-subtitle">
            {" "}
            No items added yet{" "}
          </p>
        )}
        {storageArr.length > 0 &&
          data.map((element) => {
            return (
              storageArr.includes(element.id) && (
                <div
                  className="cart-section__cards-wrap"
                  key={key + "cart" + element.id}
                >
                  {" "}
                  <ProductCard
                    key={key + element.id}
                    name={element.name}
                    price={element.price}
                    url={element.url}
                    id={element.id}
                    colour={element.colour}
                    features={
                      <>
                        <button
                          className={`cart-section__remove-from-cart-btn btn-primary selection-${element.id}`}
                          onClick={() => {
                            dispatch(actionGetCardId(element.id));
                            showHideModalToDelete();
                          }}
                        >
                          {" "}
                          Remove from cart{" "}
                        </button>
                      </>
                    }
                  />
                </div>
              )
            );
          })}

        {storageArr.length > 0 && (
          <button
            className="cart-section__purchase-btn btn-secondary"
            onClick={() => {
              dispatch(actionResetCounter());
              showHideModalToBuy();
            }}
          >
            {" "}
            Buy now!{" "}
          </button>
        )}
        {isModalDelete && (
          <div className="modalWrap">
            <div>
              <Modal
                title={modalDeleteTitle}
                mainText={modalDeleteMainText}
                closeModal={showHideModalToDelete}
                modalBtns={
                  <>
                    <button
                      className={`cart-section__refuses-delete-cart-btn btn-primary `}
                      onClick={() => {
                        showHideModalToDelete();
                        dispatch(actionDecreaseCounter());
                        deletPayloadedElementsFromStorage(
                          "cart",
                          cardId.payload
                        );
                      }}
                    >
                      Delete
                    </button>

                    <button
                      className={`cart-section__agree-delete-cart-btn btn-secondary`}
                      onClick={() => {
                        showHideModalToDelete();
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
                showHideModalToDelete();
              }}
            ></div>
          </div>
        )}

        {isModalToBuy === true && (
          <div className="modalWrap">
            <div>
              <Modal
                title={modaltoBuyTitle}
                mainText={modalToBuyMainText}
                closeModal={showHideModalToBuy}
                modalBtns={
                  <>
                    <button
                      className={`cart-section__success-purchase-btn btn-primary `}
                      onClick={() => {
                        showHideModalToBuy();
                        clearStorage("cart", []);
                      }}
                    >
                      Amazing
                    </button>
                  </>
                }
              />
            </div>
            <div
              className="modalBackground"
              onClick={() => {
                showHideModalToBuy();
              }}
            ></div>
          </div>
        )}
      </section>{" "}
    </>
  );
};

export default Cart;
