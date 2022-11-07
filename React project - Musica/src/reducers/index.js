import modalReducer, {
  actionToggleModal,
  actionShowModalCart,
  actionHideModalCart,
  actionHideModalFavourite,
  actionShowModalFavourite,
} from "./modal.reducer";
import cardReducer, {
  actionGetCardsData,
  actionGetCardId,
  actionIncreaseCounter,
  actionDecreaseCounter,
  actionResetCounter
} from "./card.reducer";

export {
  actionToggleModal,
  actionDecreaseCounter,
  modalReducer,
  actionShowModalCart,
  actionIncreaseCounter,
  actionHideModalCart,
  actionResetCounter,
  cardReducer,
  actionGetCardsData,
  actionGetCardId,
  actionHideModalFavourite,
  actionShowModalFavourite,
};

// modalReducer = modalSlice, переиминовали, так как он экспортируется по умолчанию
