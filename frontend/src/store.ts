import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./assets/slices/apiSlice";
import { orgsApiSlice } from "./assets/slices/orgsApiSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;
