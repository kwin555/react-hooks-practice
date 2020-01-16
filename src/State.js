import React, {useState} from "react";

function stateComponent () {
    const[isGreen, setIsGreen] = useState(true);

    return (
        <h1 
            onClick={ () => setIsGreen(!isGreen)}
            style={{ color : isGreen ? "limegreen" : "blue" }}
        >
            state color example
        </h1>
    );
};

export default stateComponent;