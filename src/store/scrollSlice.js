import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Section: null,
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    Section: (state, action) => {
      state.Section = action.payload;
    },
  },
});

export const { Section } = scrollSlice.actions;

export default scrollSlice.reducer;
