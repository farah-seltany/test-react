import React from "react";
import './LeftNav.scss'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainApp from "../../scenes/MainApp/MainApp";
import FirstVisit from "../../scenes/FirstVisitName/FirstVisit";
import FirstVisitSex from "../../scenes/FistVisitSex/FirstVisitSex";

const LeftNav = () => {
    return (
        <Router>
            <div className={'left-container col-xs-2'}>
                <div className={'up-container col-xs-12'}>
                        <div className={'button'}>
                            <Link to={'/'}>Accueil</Link>
                        </div>
                        <div className={'button'}>
                            <Link to={'/first-visit'}>1ère visite</Link>
                        </div>
                        <div className={'button'}>
                            <Link to={'/'}>Patients en attente</Link>
                        </div>
                        <div className={'button'}>
                            <Link to={'/'}>Patients enregistrés</Link>
                        </div>
                </div>
                <div className={'bottom-container col-xs-12'}>
                    <div className={'button'}>
                        <p>Relances</p>
                    </div>
                    <div className={'button'}>
                        <p>Statistiques</p>
                    </div>
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
                </Switch>
            </div>
        </Router>
    )
}

export default LeftNav;
