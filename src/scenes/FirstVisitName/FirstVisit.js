import React, {useContext} from "react";
import './FirstVisit.scss'
import next from '../../icons/next.svg'
import {PatientContext} from "../../patientContext";
import {useHistory} from "react-router";


const FirstVisit = () => {
    const user = useContext(PatientContext)
    const history = useHistory()
    function nextForm() {
        if (user.firstName && user.lastName) {
            history.push('first-visit-sex')
        }
    }
    return (
        <div className={'main-container'}>
            <h3>Identité du patient</h3>
            <form className={'col-xs-5'}>
                <input type={'text'} placeholder={'Prénom'} value={user.firstName} onChange={(e) => user.setFirstName(e.target.value)}/>
                <input type={'text'} placeholder={'Nom'} value={user.lastName} onChange={(e) => user.setLastName(e.target.value)}/>
            </form>
            <div className={'arrows'}>
                <img className={`${user.firstName && user.lastName ? "active" : "inactive"}`} src={next} alt={'next arrow'} onClick={nextForm}/>
            </div>
        </div>
    )

}

export default FirstVisit;
