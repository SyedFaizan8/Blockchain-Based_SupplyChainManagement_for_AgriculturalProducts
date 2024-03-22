import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import scrollSlice from "./scrollSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    scroll: scrollSlice,
  },
});

export default store;
