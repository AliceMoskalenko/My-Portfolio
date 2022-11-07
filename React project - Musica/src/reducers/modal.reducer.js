import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalCart: false,
  isModalFavourite: false,
  isModalBuyNow: false,
  isModalDeleteFromCart: false,
  isModalConfirmed: false,
};

export const modalSlice = createSlice({

  name: "modal",
  initialState,
  reducers: {
actionToggleModal:(state, action) =>{
if (action.payload === "cart"){
  state.isModalCart = !state.isModalCart
} else if (action.payload === "favourite"){
state.isModalFavourite = !state.isModalFavourite
} else if (action.payload === "buyNow"){
state.isModalBuyNow = !state.isModalBuyNow
} else if (action.payload === "deleteFromCart"){
  state.isModalDeleteFromCart = !state.isModalDeleteFromCart
}
},
    actionShowModalCart: (state) => {
      state.isModalCart = true;
    },
    actionHideModalCart: (state) => {
      state.isModalCart = false;
    },
    actionShowModalFavourite: (state) => {
      state.isModalFavourite = true;
    },
    actionHideModalFavourite: (state) => {
      state.isModalFavourite = false;
    },
  },
});


export const {
  actionHideModalCart,
  actionShowModalCart,
  actionHideModalFavourite,
  actionShowModalFavourite,
  actionToggleModal
} = modalSlice.actions;


export default modalSlice.reducer;
