import { createSlice } from "@reduxjs/toolkit";
import * as anecdoteService from "./../services/anecdote";
import { removeNotification, showNotification } from "./notificationReducer";

const anecdoteSlice = createSlice({
    name: "anecdotes",
    initialState: [],
    reducers: {
        appendAnecdote(state, action) {
            state.push(action.payload);
        },
        upvote(state, action) {
            const id = action.payload;
            return state.map((item) => {
                if (item.id === id)
                    return {
                        content: item.content,
                        id: item.id,
                        votes: item.votes + 1,
                    };
                return item;
            });
        },
        setAnecdotes(state, action) {
            return action.payload;
        },
    },
});

export const createAnecdote = (content) => {
    return async (dispatch) => {
        const newAnecdote = await anecdoteService.createNew({
            content,
            votes: 0,
        });
        dispatch(appendAnecdote(newAnecdote));
        dispatch(showNotification(content));
        setTimeout(() => {
            dispatch(removeNotification());
        }, 5000);
    };
};

export const upvoteAnecdote = (id) => {
    return async (dispatch) => {
        dispatch(upvote(id));
        const anecdotes = await anecdoteService.getAll();
        dispatch(
            showNotification(
                `You upvoted ${
                    anecdotes.find((item) => item.id === id).content
                }`
            )
        );
        setTimeout(() => {
            dispatch(removeNotification());
        }, 5000);
    }
}

export const initializeAnecdotes = () => {
    return async (dispatch) => {
        const anecdotes = await anecdoteService.getAll();
        dispatch(setAnecdotes(anecdotes));
    };
};

export default anecdoteSlice.reducer;
export const { upvote, setAnecdotes, appendAnecdote } =
    anecdoteSlice.actions;
