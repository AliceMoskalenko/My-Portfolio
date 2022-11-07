import { configureStore } from "@reduxjs/toolkit";
import { modalReducer, cardReducer } from "../reducers";

const store = configureStore({
  reducer: {
    card: cardReducer,
    modal: modalReducer,
  },
});

export default store;
