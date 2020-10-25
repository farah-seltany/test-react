import React, {useState} from "react";
const WaitingContext = React.createContext({});

const WaitingsProvider = props => {

    const [waitings, setWaitings] = useState([]);

    const waitingContext = {
        waitingsContext: waitings,
        feedWaitings: user => {
            setWaitings([...user]);
        }
    };


    return (
        <WaitingContext.Provider value={waitingContext}>
            {props.children}
        </WaitingContext.Provider>
    );
};

export { WaitingContext, WaitingsProvider }
