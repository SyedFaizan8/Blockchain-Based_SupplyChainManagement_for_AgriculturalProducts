import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSliceFarmer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    farmerlogin: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    farmerlogout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { farmerlogin, farmerlogout } = authSliceFarmer.actions;

export default authSliceFarmer.reducer;
