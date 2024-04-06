import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import scrollSlice from "./scrollSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    scroll: scrollSlice,
    cart: cartSlice,
  },
});

export default store;
