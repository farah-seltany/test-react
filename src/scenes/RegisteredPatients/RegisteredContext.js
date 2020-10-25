import React, {useState} from "react";
const RegisteredContext = React.createContext({});

const RegisteredProvider = props => {

    const [registered, setRegistered] = useState([]);

    const registeredContext = {
        registerContext: registered,
        feedRegister: user => {
            setRegistered([...registered, user]);
        }
    };


    return (
        <RegisteredContext.Provider value={registeredContext}>
            {props.children}
        </RegisteredContext.Provider>
    )
};

export { RegisteredContext, RegisteredProvider }
