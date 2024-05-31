import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { useNavigate } from "react-router-dom";

export default function AnecdoteForm() {
    const dispatch = useDispatch();
    const [newAnectode, setNewAnectode] = useState("");
    const navigate = useNavigate();

    const createNew = async (e) => {
        e.preventDefault();
        const content = newAnectode;
        setNewAnectode("");
        dispatch(createAnecdote(content));
        navigate("/anecdotes");
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
