import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  sortPrice: false,
  sortName: false
};

export const FilterSlice = createSlice({
  name: "filterSlice", // Updated the name to use camelCase
  initialState,
  reducers: {
    byName: (state, action) => {
      state.sortName = action.payload;
    },
    byPrice: (state, action) => {
      state.sortPrice = action.payload;
    },
    searchByName: (state, action) => {
      state.search = action.payload;
    },
    clearFilters: (state) => {
      state.search = "";
      state.sortName = false;
      state.sortPrice = false;
    }
  }
});

export const { byName, byPrice, searchByName, clearFilters } = FilterSlice.actions;
export default FilterSlice.reducer;
