import { createSlice } from "@reduxjs/toolkit";

let storageArr = JSON.parse(localStorage.getItem("cart") || "[]");

const initialState = {
  data: [],
  cardId: "0",
  cartItems: storageArr.length,
};
export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    actionGetCardsData: (state, { payload }) => {
      state.data = payload;
    },
    actionGetCardId: (state, id) => {
      state.cardId = id;
    },
    actionDecreaseCounter: (state) => {
      state.cartItems -= 1;
    },
    actionIncreaseCounter: (state) => {
      state.cartItems += 1;
    },
    actionResetCounter: (state) => {
      state.cartItems = 0;
    },
  },
});

export const {
  actionGetCardsData,
  actionIncreaseCounter,
  actionGetCardId,
  actionResetCounter,
  actionDecreaseCounter,
} = cardSlice.actions;
export default cardSlice.reducer;
