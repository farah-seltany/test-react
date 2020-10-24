import React, { createContext, useState } from "react";

export const PatientContext = createContext({});

export const PatientProvider = ({ children }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [sex, setSex] = useState('');

    return (
        <PatientContext.Provider
            value={{
                firstName,
                lastName,
                sex,
                setFirstName,
                setLastName,
                setSex,
            }}
        >
            {children}
        </PatientContext.Provider>
    );
};
