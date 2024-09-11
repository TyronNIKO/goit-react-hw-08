import {createSlice} from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
    name: "filter",
    initialState: {name: ""},
    reducers: {
        changeFilter(state, action) {
            state.name = action.payload;
        },
    },
});

export const filterValue = state => state.filters.name;
