import {createSlice} from "@reduxjs/toolkit";

const initialState = {discuss: false};

export const discussReducer = createSlice({
    name: "discuss",
    initialState,
    reducers: {
        openModal: (state) => {
            state.discuss = true;
        },
        closeModal: (state) => {
            state.discuss = false;
        },
    },
});

export const {openModal, closeModal} = discussReducer.actions;
export default discussReducer.reducer;
