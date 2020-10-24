import React, {useContext} from "react";
import './FirstVisitSex.scss'
import next from '../../icons/next.svg'
import {PatientContext} from "../../patientContext";

const FirstVisitSex = () => {
    const user = useContext(PatientContext)
    function nextForm() {
        console.log(user)
    }
    return (
        <div className={'main-container'}>
            <h3>Sexe du patient : {user.firstName} {user.lastName}</h3>
            <form className={'col-xs-5'}>
                <label>
                    <input type="radio" value="Homme" onChange={(e) => user.setSex(e.target.value)} />
                    Homme
                </label>
                <label>
                    <input type="radio" value="Femme" onChange={(e) => user.setSex(e.target.value)}/>
                    Femme
                </label>
            </form>
            <img src={next} alt={'next arrow'} onClick={nextForm}/>
        </div>
    )

}

export default FirstVisitSex;
