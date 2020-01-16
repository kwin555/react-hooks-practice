import React from "react";
import ReactDOM from "react-dom";
import State from "./State";
import Effect from "./Effect"
import Context from "./Context";
import Ref from "./Ref";
import Reducer from "./Reducer";
import Memo from "./Memo";
import CallBack from "./CallBack";
import LayoutEffect from "./LayoutEffects";
import "./styles.css";
import ImperativeHandleComponent from "./ImperativeHandle";

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
            <hr />
            <Memo />
            <hr />
            <CallBack />
            <hr />
            <LayoutEffect />
            <hr />
            <ImperativeHandleComponent />
        </div>
    ); 
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
