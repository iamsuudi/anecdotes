import { createSlice } from "@reduxjs/toolkit";

/* eslint no-unused-vars: 0 */
const notificationSlice = createSlice({
    name: "notification",
    initialState: "",
    reducers: {
        showNotification(state, action) {
            return action.payload;
        },
        removeNotification(state, action) {
            return "";
        },
    },
});

export default notificationSlice.reducer;
export const { showNotification, removeNotification } =
    notificationSlice.actions;
