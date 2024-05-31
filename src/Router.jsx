import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Anecdotes from "./routers/Anecdotes";
import App from "./routers/App";
import Anecdote from "./routers/Anecdote";
import AnecdoteForm from "./routers/CreatePage";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/create",
                    element: <AnecdoteForm />,
                },
                {
                    path: "/anecdotes/:id",
                    element: <Anecdote />,
                },
                {
                    path: "/anecdotes",
                    element: <Anecdotes />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}
