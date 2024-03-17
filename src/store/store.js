import { configureStore } from "@reduxjs/toolkit";
import authSliceCustomer from "./authSliceCustomer";
import authSliceFarmer from "./authSliceFarmer";
import authSliceAuthority from "./authSliceAuthority";

const store = configureStore({
  reducer: {
    customerAuth: authSliceCustomer,
    farmerAuth: authSliceFarmer,
    authorityAuth: authSliceAuthority,

    //TODO: add more slices here for posts
  },
});

export default store;
