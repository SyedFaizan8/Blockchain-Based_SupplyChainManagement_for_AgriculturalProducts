import { configureStore } from "@reduxjs/toolkit";
import scrollSlice from "./scrollSlice";
import userSlice from "./userSlice"; 
import walletSlice from "./walletSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    addContract: walletSlice,
    scroll: scrollSlice,
    userlogin: userSlice,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export default store;
