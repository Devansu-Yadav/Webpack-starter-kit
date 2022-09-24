import { App } from "./App";
import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");

ReactDOM.render(
    <React.StrictMode>
        <App name="User" />
    </React.StrictMode>,
    root
);