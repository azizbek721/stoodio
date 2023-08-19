import {createSlice} from "@reduxjs/toolkit";

const initialState = {menu: false};

export const navReducer = createSlice({
    name: "nav",
    initialState,
    reducers: {
        open: (state) => {
            state.menu = true;
        },
        close: (state) => {
            state.menu = false;
        },
    },
});

export const {open, close} = navReducer.actions;
export default navReducer.reducer;
