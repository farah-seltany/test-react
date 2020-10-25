import React, {useContext} from "react";
import './LeftNav.scss'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainApp from "../../scenes/MainApp/MainApp";
import FirstVisit from "../../scenes/FirstVisitName/FirstVisit";
import FirstVisitSex from "../../scenes/FistVisitSex/FirstVisitSex";
import PatientInfos from "../../scenes/PatientInfos/PatientInfos";
import {PatientContext} from "../../patientContext"
import WaitingsPatient from "../../scenes/WaitingsPatients/WaitingsPatients";
import RegisteredPatients from "../../scenes/RegisteredPatients/RegisteredPatients";

const LeftNav = () => {
    const user = useContext(PatientContext)
    return (
        <Router>
            <div className={'left-container col-xs-2'}>
                <div className={'up-container col-xs-12'}>
                        <Link to={'/'} className={'button'}>
                            <p>Accueil</p>
                        </Link>
                        <Link to={'/first-visit'} className={'button'}>
                            <p>1ère visite</p>
                        </Link>
                        <Link to={'/waitings'} className={'button'}>
                            <p>Patients en attente</p>
                        </Link>
                        <Link to={'registered'} className={'button'}>
                            <p>Patients enregistrés</p>
                        </Link>
                </div>
                <div className={'bottom-container col-xs-12'}>
                    <Link to={'/'} className={'button'}>
                        <p>Relances</p>
                    </Link>
                    <Link to={'/'} className={'button'}>
                        <p>Statistiques</p>
                    </Link>
                </div>
            </div>
            <div className={'switch-container col-xs-10'}>
                <Switch>
                    <Route exact path='/' component={MainApp}>
                    </Route>
                    <Route path='/first-visit' component={FirstVisit}>
                    </Route>
                    <Route path='/first-visit-sex' component={FirstVisitSex}>
                    </Route>
                    <Route path='/patient-infos' component={PatientInfos}>
                    </Route>
                    <Route path='/waitings' component={WaitingsPatient}>
                    </Route>
                    <Route path='/registered' component={RegisteredPatients}>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default LeftNav;
