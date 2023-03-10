import { createSlice } from "@reduxjs/toolkit";

export const logRegFormSlice = createSlice({
    name: "regForm",
    initialState: {
        name: "",
        email: "",
        phone: "",
        password: "",
        address: ""
    }
})

export default loginSlice.reducer;