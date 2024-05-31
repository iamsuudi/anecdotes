import { useDispatch, useSelector } from "react-redux";
import {
    upvoteAnecdote,
} from "../reducers/anecdoteReducer";
import { filterBy } from "../reducers/filterReducer";
import { NavLink } from "react-router-dom";

function FilterForm() {
    const dispatch = useDispatch();
    const filter = useSelector(({ filter }) => filter);

    return (
        <div>
            <h2>Filter</h2>
            <form>
                <div>
                    <input
                        type="text"
                        value={filter}
                        onChange={({ target }) => {
                            // setFilterInput(target.value);
                            dispatch(filterBy(target.value));
                        }}
                    />
                </div>
            </form>
        </div>
    );
}

export default function Anecdotes() {
    const dispatch = useDispatch();
    const anecdotes = useSelector(({ anecdotes, filter }) => {
        // console.log("anecdotes ", anecdotes);
        if (filter === "") return anecdotes;
        else {
            const regex = new RegExp(filter, "i");
            return anecdotes.filter((item) => regex.test(item.content));
        }
    });

    const voteHandler = (anecdote) => {
        dispatch(upvoteAnecdote(anecdote));
    };

    return (
        <>
            <FilterForm />
            <h2>Anecdotes</h2>
            {/* <Notification /> */}
            {anecdotes
                .map((anecdote) => anecdote)
                .sort((a, b) => a.votes < b.votes)
                .map((anecdote) => (
                    <div key={anecdote.id}>
                        <NavLink to={`/anecdotes/${anecdote.id}`}>
                            {anecdote.content}
                        </NavLink>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => voteHandler(anecdote)}>
                                vote
                            </button>
                        </div>
                    </div>
                ))}
        </>
    );
}
