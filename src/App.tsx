import './App.css'
import React, { useEffect, useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Router from './Router';

const initialPosition: [number, number] = [51.505, -0.09];

const App: React.FC = () => {
  return (
    <MapContainer
      center={initialPosition}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
      id="map"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={initialPosition}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Router />
    </MapContainer>
  );
};

export default App;

