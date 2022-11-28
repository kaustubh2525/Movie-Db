import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { MovieDbSlice } from "./Redux/MovieDbSlice";
import Pagination from "./Redux/PaginationSlice";

export const Store = configureStore({
  reducer: {
    [MovieDbSlice.reducerPath]: MovieDbSlice.reducer,
    Pagination,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MovieDbSlice.middleware),
});

setupListeners(Store.dispatch);
