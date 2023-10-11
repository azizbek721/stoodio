import {configureStore} from "@reduxjs/toolkit";
import Reducer from "./reducers/reducer";
import DiscussReducer from "./reducers/discussReducer";
import ResumeReducer from "./reducers/resumeReducer";

export const store = configureStore({
    reducer: {
        Reducer,
        DiscussReducer,
        ResumeReducer
    },
});
export const dispatch = store.dispatch;
