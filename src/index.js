import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import TopNav from "./TopNav/TopNav";
import LeftNav from "./LeftNav/LeftNav";
import MainApp from "./MainApp/MainApp";

ReactDOM.render(
  <React.StrictMode>
    <TopNav/>
    <LeftNav/>
    <MainApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
