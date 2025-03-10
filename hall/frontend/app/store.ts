import { configureStore } from "@reduxjs/toolkit"
import eventReducer from "./features/eventSlice"
import inquiryReducer from "./features/inquirySlice"


export const store = configureStore({
    reducer: {
        events: eventReducer,
        inquiries: inquiryReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;