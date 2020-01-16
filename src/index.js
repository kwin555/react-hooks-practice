import React from "react";
import ReactDOM from "react-dom";
import State from "./State";
import Effect from "./Effect"
import Context from "./Context";
import Ref from "./Ref";
import Reducer from "./Reducer";
import "./styles.css";

function App () {
    return (
        <div className="App">
            <State />
            <hr />
            <Effect />
            <hr />
            <Context />
            <hr />
            <Ref />
            <hr />
            <Reducer />
        </div>
    ); 
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
