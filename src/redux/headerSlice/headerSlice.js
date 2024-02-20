import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    headerMode: "action"
}

const headerSlice = createSlice({
    name: "header",
    initialState,
    reducers : {
        welcomeHeader : (state) => {
            state.headerMode = "welcome"
        },
        headerAction : (state) => {
            state.headerMode = "action"
        },
        switchHeader: (state, action) => {
            state.headerMode = action.payload
        }
    }
})

export const {
    welcomeHeader,
    headerAction,
    switchHeader
} = headerSlice.actions

export default headerSlice.reducer