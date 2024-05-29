import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        filterBy(state, action) {
            return action.payload;
        },
    },
});

export default filterSlice.reducer;
export const { filterBy } = filterSlice.actions;
