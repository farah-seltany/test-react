import React from "react";
import './LeftNav.scss'

function LeftNav () {
    return (
        <div className={'left-container col-xs-2'}>
            <div className={'up-container col-xs-12'}>
                <div className={'button'}>
                    <p>1ère visite</p>
                </div>
                <div className={'button'}>
                    <p>Informations</p>
                </div>
                <div className={'button'}>
                    <p>Patients en attente</p>
                </div>
                <div className={'button'}>
                    <p>Patients enregistrés</p>
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
    )
}

export default LeftNav;
