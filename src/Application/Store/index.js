import { configureStore } from "@reduxjs/toolkit";

import { productSlice } from "./Reducers/Products_reducer";
const store = configureStore({
  reducer: {
    product: productSlice.reducer,
  },
});

export default store;
