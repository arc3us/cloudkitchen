import React from "react";
import "./App.css";
import Gmap from "./Gmap";
import { IconButton } from "@mui/material";

function App() {
  return (
    <div className="app_body">
      <div className="maps_container">
        <h3> Select location on map </h3>
        <Gmap />
      </div>
    </div>
  );
}

export default App;
