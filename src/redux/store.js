import { configureStore } from "@reduxjs/toolkit";
import headerSliceReducer from "./headerSlice/headerSlice";
import servicesSliceReducer from "./servicesSlice/servicesSlice";

export const store = configureStore({
    reducer: {
        header: headerSliceReducer,
        service: servicesSliceReducer,
    }
})
