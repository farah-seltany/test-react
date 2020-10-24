import React, {useContext} from "react";
import {PatientContext} from "../../patientContext"

const PatientInfos = () => {
    const user = useContext(PatientContext)
    if (user.lastName && user.firstName && user.sex) {
        return (
            <div className={'main-container'}>
                <h3>Fiche du patient</h3>
                <p>Prénom : {user.firstName}</p>
                <p>Nom : {user.lastName}</p>
                <p>Sexe : {user.sex}</p>
            </div>
        )
    } else {
        return (
            <div className={'main-container'}>
                <h3>Fiche du patient</h3>
                <h4>Toutes les informations du patient n'ont pas été renseignées.</h4>
            </div>
        )
    }

}

export default PatientInfos;
