import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../features/counters/countersSlice";
import { postsApi } from "../features/posts/postApi";
import { apiSlice } from "../features/api/apiSlice";
import cachingReducer from "../features/caching/cachingState";

export const store = configureStore({
    reducer: {  
        counters: countersReducer,
        [postsApi.reducerPath]: postsApi.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        cachings: cachingReducer
    },
    middleware: (getMiddleWare)=>getMiddleWare().concat(postsApi.middleware).concat(apiSlice.middleware)
})