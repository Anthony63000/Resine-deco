import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalServiceIsOpen : false,
    modalServiceMode : "",
    indexOfModal: ""
}

const serviceSlice = createSlice({
    name: "service",
    initialState,
    reducers : {
        OpenModal : (state) => {
            state.modalServiceIsOpen = true
        },
        CloseModal : (state) => {
            state.modalServiceIsOpen = false
        },
        toggleModeModal : (state, action) => {
            state.modalServiceMode = action.payload
        },
    }
})

export const {
    OpenModal,
    CloseModal,
    toggleModeModal,
} = serviceSlice.actions

export default serviceSlice.reducer