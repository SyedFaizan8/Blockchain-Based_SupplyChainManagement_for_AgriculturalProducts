import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
      state.role = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
