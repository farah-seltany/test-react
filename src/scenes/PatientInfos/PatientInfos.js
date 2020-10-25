import React, {useContext} from "react";
import {PatientContext} from "../../patientContext"
import {RegisteredContext} from "../RegisteredPatients/RegisteredContext";
import {useHistory} from "react-router";
import addIcon from '../../icons/add.svg'
import './PatientInfos.scss'

const PatientInfos = () => {
    const user = useContext(PatientContext)
    const registered = useContext(RegisteredContext)
    const history = useHistory()
    function resetUserInfos () {
        user.setFirstName('')
        user.setLastName('')
        user.setSex('')
    }
    function add () {
        registered.feedRegister(user)
        history.push('/registered')
        resetUserInfos()
    }
    return (
        <div className={'main-container'}>
            <h3>Fiche du patient</h3>
            <p>Prénom : {user.firstName}</p>
            <p>Nom : {user.lastName}</p>
            <p>Sexe : {user.sex}</p>
            <button onClick={add}>Ajouter le patient
                <img className={'add-icon'} src={addIcon} alt={'add icon'}/>
            </button>
        </div>
    )

}

export default PatientInfos;
