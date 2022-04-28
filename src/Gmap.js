import React, { useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { TextField, IconButton } from "@mui/material";
import "./Gmap.css";
import Recommendations from "./Recommendations";

const containerStyle = {
  width: "600px",
  height: "600px",
  marginTop: "2rem",
};

const center = {
  lat: 12.974258,
  lng: 77.596011,
};

function Gmap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBDasTkIwS8ocX1LXrTI-iS8UwJ7-7XOS0",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const [coords, setCoords] = useState([]);
  const [recs, setRecs] = useState(false);

  const handleSubmit = (event) => {
    setRecs(true);
    alert("Input data received")
  }


  return isLoaded ? (
    <div className="map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={(ev) => {
          setCoords({
            lat: ev.latLng.lat(),
            lng: ev.latLng.lng(),
          });
        }}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          className="inputArea"
          id="standard-basic"
          label="Input"
          variant="standard"
          value={coords.lat + ", " + coords.lng}
        />
        <IconButton className="submitBtn" type="submit" variant="contained">
          <h4>SUBMIT</h4>
        </IconButton>
      </form>
    </div>
  ) : (
    <></>
  );
}

export default Gmap;
