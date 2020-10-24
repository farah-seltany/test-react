import React, {useContext} from "react"
import './FirstVisitSex.scss'
import next from '../../icons/next.svg'
import {PatientContext} from "../../patientContext"
import {useHistory} from "react-router"
import previous from '../../icons/next.svg'
import man from '../../icons/man.svg'
import woman from '../../icons/woman.svg'

const FirstVisitSex = () => {
    const user = useContext(PatientContext)
    const history = useHistory()
    function nextForm() {
        history.push('patient-infos')
    }
    function previousForm() {
        history.push('first-visit')
    }
    return (
        <div className={'main-container'}>
            <h3>Sexe du patient : {user.firstName} {user.lastName}</h3>
            <form className={'col-xs-4'}>
                <label htmlFor={'homme-radio'}>
                    <input id={'homme-radio'} type="radio" name={'sex-radio'} value="Homme" onChange={(e) => user.setSex(e.target.value)} />
                    <img className={'icons'} src={man} alt={'man-icon'}/>
                    <p>Homme</p>
                </label>
                <label htmlFor={'femme-radio'}>
                    <input id={'femme-radio'} type="radio" name={'sex-radio'} value="Femme" onChange={(e) => user.setSex(e.target.value)}/>
                    <img className={'icons'} src={woman} alt={'woman-icon'}/>
                    <p>Femme</p>
                </label>
            </form>
            <div className={'sex-buttons-container col-xs-2'}>
                <img className={'previous'} src={previous} alt={'previous arrow'} onClick={previousForm}/>
                <img className={'next'} src={next} alt={'next arrow'} onClick={nextForm}/>
            </div>
        </div>
    )

}

export default FirstVisitSex;
