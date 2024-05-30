import { createSlice } from "@reduxjs/toolkit";

const anecdoteSlice = createSlice({
    name: "anecdotes",
    initialState: [],
    reducers: {
        createAnecdote(state, action) {
            const content = action.payload;
            state.push(content);
        },
        upvoteAnecdote(state, action) {
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

export default anecdoteSlice.reducer;
export const { createAnecdote, upvoteAnecdote, setAnecdotes } =
    anecdoteSlice.actions;
