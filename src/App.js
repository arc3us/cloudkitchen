import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Gmap from './Gmap';
import { IconButton } from '@mui/material';

function App() {
  return (
    <div className="app_body">
      <div className="maps_container">
        <h3> Select location on map </h3>
        <Gmap />
        <IconButton className='submitBtn'>
          <h4>SUBMIT</h4>
        </IconButton>
      </div>
    </div>
  );
}

export default App;
