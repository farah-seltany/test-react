import React, {useContext, useState} from "react";
import './FirstVisit.scss'
import next from '../../icons/next.svg'
import {PatientContext} from "../../patientContext";
import {useHistory} from "react-router";
import {WaintingsContext} from "../../waintingsContext";


const FirstVisit = () => {
    const user = useContext(PatientContext)
    const waitings = useContext(WaintingsContext)
    const history = useHistory()
    function nextForm() {
        history.push('first-visit-sex')
        console.log(user)
    }
    function saveForLater() {
        console.log(waitings)
    }
    return (
        <div className={'main-container'}>
            <h3>Identité du patient</h3>
            <form className={'col-xs-5'}>
                <input type={'text'} placeholder={'Prénom'} onChange={(e) => user.setFirstName(e.target.value)}/>
                <input type={'text'} placeholder={'Nom'} onChange={(e) => user.setLastName(e.target.value)}/>
            </form>
            <div>
                <button onClick={saveForLater} disabled={!user.firstName || !user.lastName}>Continuer l'enregistrement plus tard</button>
                <img src={next} alt={'next arrow'} onClick={nextForm}/>
            </div>
        </div>
    )

}

export default FirstVisit;
