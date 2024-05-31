import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    initializeAnecdotes,
    upvoteAnecdote,
} from "../reducers/anecdoteReducer";
import { useParams } from "react-router-dom";

export default function Anecdote() {
    const dispatch = useDispatch();
    const params = useParams();
    const anecdote = useSelector(({ anecdotes }) => {
        console.log(anecdotes);
        const anecdote = anecdotes.filter((item) => item.id === params.id);
        console.log(anecdote[0]);
        return anecdote[0];
    });

    const vote = (anecdote) => {
        dispatch(upvoteAnecdote(anecdote));
    };

    useEffect(() => {
        dispatch(initializeAnecdotes());
        // console.log("initialize");
    }, [dispatch]);

    return (
        <>
            {anecdote ? <div>
                <div>{anecdote.id}</div>
                <div>{anecdote.content}</div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote)}>vote</button>
                </div>
            </div> : <div>loading...</div>}
        </>
    );
}
