import { configureStore } from "@reduxjs/toolkit";
import captionsReducer from "./captionsSlice";

export const store = configureStore({
    reducer: {
        captions: captionsReducer,
    },
});

export default store;
