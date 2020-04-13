import React from 'react';
import './App.css';

import logo from './assets/logo.svg';

import Routes from './routes';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCNC" link="http://192.168.0.7:3000"/>

      <div className="content">
        <Routes />
      </div>
    </div>
    );
}

export default App;
