import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    password: null,
    role: null,
    ETHAddress: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.email = action.payload.data["email"];
            state.password = action.payload.data["password"];
            state.role = action.payload.data["role"];
            state.ETHAddress = action.payload.data["ETHAddress"];
        }
    }
})

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;