import {configureStore} from "@reduxjs/toolkit";
import Reducer from "./reducers/reducer";
import DiscussReducer from "./reducers/discussReducer";

export const store = configureStore({
    reducer: {
        Reducer,
        DiscussReducer
    },
});
export const dispatch = store.dispatch;
