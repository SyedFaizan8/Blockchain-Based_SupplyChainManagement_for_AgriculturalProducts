import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSliceCustomer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    customerlogin: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    customerlogout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { customerlogin, customerlogout } = authSliceCustomer.actions;

export default authSliceCustomer.reducer;
