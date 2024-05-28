import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { upVote, create } from "./reducers/anecdoteReducer";

function AnecdotesList() {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const vote = (id) => {
    console.log("vote", id);
    dispatch(upVote(id));
  };

  return (
    <>
      <h2>Anecdotes</h2>
      {anecdotes
        .sort((a, b) => a.votes < b.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </>
  );
}

function AnecdoteForm() {
  const dispatch = useDispatch();
  const [newAnectode, setNewAnectode] = useState("");

  const createNew = (e) => {
    e.preventDefault();
    console.log("new one", newAnectode);
    dispatch(create(newAnectode));
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

const App = () => {
  return (
    <div>
      <AnecdotesList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
