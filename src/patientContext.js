import React, { createContext, useState } from "react";

export const PatientContext = createContext(undefined);

export const PatientProvider = ({ children }) => {
    const [firstName, setFirstName] = useState(undefined);
    const [lastName, setLastName] = useState(undefined);
    const [sex, setSex] = useState(undefined);

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
