import React from "react";
import ReactDOM from "react-dom";
import "./view/styles/index.css";
import App from "./view/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const app = (
    <BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById("root"));
