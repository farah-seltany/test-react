import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import TopNav from "./components/TopNav/TopNav";
import LeftNav from "./components/LeftNav/LeftNav";
import {PatientProvider} from "./patientContext";
import {RegisteredProvider} from "./scenes/RegisteredPatients/RegisteredContext";

ReactDOM.render(
  <React.StrictMode>
      <PatientProvider>
          <RegisteredProvider>
              <TopNav/>
              <LeftNav/>
          </RegisteredProvider>
      </PatientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
