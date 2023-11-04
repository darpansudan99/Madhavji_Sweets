import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Slices/CartSlice";
import FilterSlice from "../Slices/FilterSlice";

export const Store = configureStore({
  reducer: {
    cart: CartSlice,
    filter: FilterSlice,
  },
});
