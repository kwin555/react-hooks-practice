import React, { useState, useContext, createContext } from "react";

const UserContext = createContext([
    {
        firstName: "Bob",
        lastName: "Bobberson",
        suffix: 1,
        email: "bobbobberson@example.com"
    },
    obj => obj
]);

const LevelFive = () => {
    const [user, setUser] = useContext(UserContext);

    return (
        <div>
            <h5>{`${user.firstName} ${user.lastName} the ${user.suffix} born`}</h5>
            <button 
                onClick= {() => {
                    setUser(Object.assign({}, user, { suffix: user.suffix + 1}));
                }}
            >
                Increment
            </button>
        </div>
    );
};

const LevelFour = () => (
    <div>
        <h4>fourth level</h4>
        <LevelFive />
    </div>
);

const LevelThree = () => (
    <div>
        <h4>third level</h4>
        <LevelFour />
    </div>
);

const LevelTwo = () => (
    <div>
        <h4>second level</h4>
        <LevelThree />
    </div>
);

const ContextComponent = () => {
    const userState = useState({
        firstName: "James",
        lastName: "Jameson",
        suffix: 1,
        email: "Jamesjameson@example.com"
    });
    return (
        <UserContext.Provider value={userState}>
            <h1>first level</h1>
            <LevelTwo />
        </UserContext.Provider>
    );
};

export default ContextComponent;