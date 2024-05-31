import { Outlet, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeAnecdotes } from "../reducers/anecdoteReducer";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeAnecdotes());
        // console.log("initialize");
    }, [dispatch]);

    return (
        <div
            style={{
                display: "flex",
                minHeight: "100dvh",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div style={{}}>
                <div
                    style={{
                        display: "flex",
                        gap: "2rem",
                        padding: "1rem",
                    }}
                >
                    <NavLink to={"/create"}>Create New</NavLink>
                    <NavLink to={"/anecdotes"}>Anecdotes</NavLink>
                </div>
                <Outlet />
                <div>Built by Abdulfetah S.</div>
            </div>
        </div>
    );
};

export default App;
