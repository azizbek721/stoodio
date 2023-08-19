import {configureStore} from "@reduxjs/toolkit";
import Reducer from "./reducers/reducer";

export const store = configureStore({
    reducer: {
        Reducer,
    },
});
export const dispatch = store.dispatch;
