import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSliceAuthority = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authoritylogin: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    authoritylogout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSliceAuthority.actions;

export default authSliceAuthority.reducer;
