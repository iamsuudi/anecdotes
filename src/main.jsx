import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import Router from "./Router";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <Router />
    </Provider>
);
