import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userContract: null,
    productContract: null,
    address: null,
    users: null,
    product: null
}

const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {
        setWallet: (state, action) => {
            state.userContract = action.payload.userContract;
            state.productContract = action.payload.productContract;
            state.address = action.payload.address;
            state.users = action.payload.users;
            state.product = action.payload.product;
        }
    }
})

export const { setWallet } = walletSlice.actions;
export default walletSlice.reducer;