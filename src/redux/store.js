import { configureStore } from "@reduxjs/toolkit";
import headerSliceReducer from "./headerSlice/headerSlice";
import servicesSliceReducer from "./servicesSlice/servicesSlice";
import legalNoticeSliceReducer from "./LegalNoticeSlice/legalNoticeSlice";

export const store = configureStore({
    reducer: {
        header: headerSliceReducer,
        service: servicesSliceReducer,
        legalNotice : legalNoticeSliceReducer
    }
})
