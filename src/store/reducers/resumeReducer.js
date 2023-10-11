import {createSlice} from "@reduxjs/toolkit";

const initialState = {resume: false};

export const resumeModalReducer = createSlice({
    name: "resume",
    initialState,
    reducers: {
        openResumeModal: (state) => {
            state.resume = true;
        },
        closeResumeModal: (state) => {
            state.resume = false;
        },
    },
});

export const {openResumeModal, closeResumeModal} = resumeModalReducer.actions;
export default resumeModalReducer.reducer;
