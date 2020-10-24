import React, { createContext, useState } from "react";

export let WaintingsContext = createContext(undefined);

export const WaintingsProvider = ({ children }) => {
   let [waitings, setWaitings] = useState({})

    return (
        <WaintingsContext.Provider
            value={{
                waitings,
                setWaitings
            }}
        >
            {children}
        </WaintingsContext.Provider>
    );
};
