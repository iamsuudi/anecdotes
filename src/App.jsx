import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    createAnecdote,
    setAnecdotes,
    upvoteAnecdote,
} from "./reducers/anecdoteReducer";
import { filterBy } from "./reducers/filterReducer";
import Notification from "./components/Notification";
import { showNotification } from "./reducers/notificationReducer";
import * as anecdoteService from "./services/anecdote";

function AnecdotesList() {
    const dispatch = useDispatch();
    const anecdotes = useSelector(({ anecdotes, filter }) => {
        console.log("anecdotes ", anecdotes);
        if (filter === "") return anecdotes;
        else {
            const regex = new RegExp(filter, "i");
            return anecdotes.filter((item) => regex.test(item.content));
        }
    });

    const vote = (id) => {
        console.log("vote", id);
        dispatch(upvoteAnecdote(id));
        dispatch(
            showNotification(
                `You upvoted ${
                    anecdotes.find((item) => item.id === id).content
                }`
            )
        );
    };

    useEffect(() => {
        anecdoteService.getAll().then((anecdotes) => {
            dispatch(setAnecdotes(anecdotes));
        });
    }, []);

    return (
        <>
            <h2>Anecdotes</h2>
            {anecdotes
                .map((anecdote) => anecdote)
                .sort((a, b) => a.votes < b.votes)
                .map((anecdote) => (
                    <div key={anecdote.id}>
                        <div>{anecdote.content}</div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => vote(anecdote.id)}>
                                vote
                            </button>
                        </div>
                    </div>
                ))}
        </>
    );
}

function AnecdoteForm() {
    const dispatch = useDispatch();
    const [newAnectode, setNewAnectode] = useState("");

    const createNew = async (e) => {
        e.preventDefault();
        console.log("new one", newAnectode);
        const returnedAnecdote = await anecdoteService.createNew({ content: newAnectode, votes: 0 });
        dispatch(createAnecdote(returnedAnecdote));
        dispatch(showNotification(`You created new anecdote: ${newAnectode}`));
        setAnecdotes('')
    };

    return (
        <>
            <h2>create new</h2>
            <form>
                <div>
                    <input
                        type="text"
                        value={newAnectode}
                        onChange={({ target }) => {
                            setNewAnectode(target.value);
                        }}
                    />
                </div>
                <button onClick={createNew}>create</button>
            </form>
        </>
    );
}

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

const App = () => {
    return (
        <div>
            <FilterForm />
            <Notification />
            <AnecdotesList />
            <AnecdoteForm />
        </div>
    );
};

export default App;
