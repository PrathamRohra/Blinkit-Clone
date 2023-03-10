import { createSlice } from "@reduxjs/toolkit";
export const loginSlice = createSlice({
    name: "login",
    initialState: {
        openclose: false
    },
    reducers: {
        popup: (state) =>{
            state.openclose = !state.openclose;
        }
    }
})

export const { popup } = loginSlice.actions;
export default loginSlice.reducer;