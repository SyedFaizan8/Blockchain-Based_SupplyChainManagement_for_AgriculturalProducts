import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addItem: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.requantity++;
      } else {
        state.items.push({ ...action.payload, requantity: 1 });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    removeAllItem: (state, action) => {
      state.items = [];
    },

    adjustQuantity: (state, action) => {
      const { id, increment } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        if (increment && item.requantity < item.quantity) {
          item.requantity += 1;
        }
        if(!increment){
          item.requantity -= 1;
        }
        if (item.requantity === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },

  },
});

export const { addItem, removeItem, removeAllItem, adjustQuantity } = cartSlice.actions;

export default cartSlice.reducer;