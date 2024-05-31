import { useDispatch, useSelector } from "react-redux";
import { upvoteAnecdote } from "../reducers/anecdoteReducer";
import { useParams } from "react-router-dom";

export default function Anecdote() {
    const dispatch = useDispatch();
    const params = useParams();
    const anecdote = useSelector(({ anecdotes }) => {
        const anecdote = anecdotes.filter((item) => item.id === params.id);

        return anecdote[0];
    });

    const vote = (anecdote) => {
        dispatch(upvoteAnecdote(anecdote));
    };

    return (
        <>
            {anecdote ? (
                <div>
                    <div>{anecdote.id}</div>
                    <div>{anecdote.content}</div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            ) : (
                <div>loading...</div>
            )}
        </>
    );
}
