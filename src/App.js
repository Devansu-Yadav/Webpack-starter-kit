import _ from "lodash";
import "./App.css";

const App = ({ name }) => {
    return `<h2>${_.join(["Welcome,", name], " ")}</h2>`;
};

export { App };