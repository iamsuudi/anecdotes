import { createSlice } from "@reduxjs/toolkit";

/* eslint no-unused-vars: 0 */
const notificationSlice = createSlice({
    name: "notification",
    initialState: "",
    reducers: {
        show(state, action) {
            return action.payload;
        },
        removeNotification(state, action) {
            return "";
        },
    },
});

export const showNotification = (content, timer) => {
    return async (dispatch) => {
        dispatch(show(content));
        setTimeout(() => {
            dispatch(removeNotification());
        }, timer);
    };
};

export default notificationSlice.reducer;
export const { show, removeNotification } = notificationSlice.actions;
