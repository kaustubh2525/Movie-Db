import { createSlice } from "@reduxjs/toolkit";
import { paginateObj } from "../../constants/constants";

export const PaginationSlice = createSlice({
  name: "Pagination",
  initialState: paginateObj,
  reducers: {
    setnextPage: (state, { payload: { page } }) => ({
      ...state,
      page: state.page + page,
    }),
    setpreviousPage: (state, { payload: { page } }) => ({
      ...state,
      page: state.page - page,
    }),
    setTotalRows: (state, { payload: { totalRows } }) => ({
      ...state,
      totalRows: totalRows,
    }),
    setPageLimit: (state, { payload: { limit } }) => ({
      ...state,
      limit: limit,
    }),
  },
});

export const { setnextPage, setpreviousPage, setTotalRows, setPageLimit } =
  PaginationSlice.actions;

export default PaginationSlice.reducer;
