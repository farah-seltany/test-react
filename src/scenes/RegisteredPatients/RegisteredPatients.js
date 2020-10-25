import React, {useContext} from "react";
import './RegisteredPatients.scss'
import {RegisteredContext} from "./RegisteredContext";

const RegisteredPatients = () => {
    const patientsArray = useContext(RegisteredContext)
    const listPatients = patientsArray.registerContext.map((patient) =>
        <li>{patient.firstName} {patient.lastName} - {patient.sex}</li>
    )
    return (
        <div className={'array-container'}>
            <h3>Patients enregistrés</h3>
            <div>{listPatients}</div>
        </div>
    )
}

export default RegisteredPatients;
