import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalState : false
}

const legalNoticeSlice = createSlice({
    name: "legalNotice",
    initialState,
    reducers : {
        toggleModalLegal : (state) => {
            state.modalState = !state.modalState
        },
    }
})

export const {
    toggleModalLegal
} = legalNoticeSlice.actions

export default legalNoticeSlice.reducer