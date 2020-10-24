import React from "react";
import './TopNav.scss'
import ReactIcon from './react-icon.png'

const TopNav = () => {
    return (
        <div className={'container col-xs-12'}>
            <div className={'row'}>
                <div className={'img-container col-xs-2'}>
                    <img src={ReactIcon} alt={'logo'}/>
                </div>
                <div className={'name-container col-xs-2 col-xs-offset-8'}>
                    <div className={'name'}>Médecin : <b>Farah SELTANY</b></div>
                </div>
            </div>
        </div>
    )

}

export default TopNav;
