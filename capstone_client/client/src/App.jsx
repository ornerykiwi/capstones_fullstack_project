import './App.css';
import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import "leaflet/dist/leaflet.css"; 
import 'leaflet-routing-machine'; 
import L from 'leaflet';
import { useState, useEffect } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ParentContainer from './containers/ParentContainer'

function App() {


  const center = [51.505, -0.09]; //map center
  const position = [51.505, -0.09]; //marker 

  const route = L.Routing.control({
    waypoints: [
        L.latLng(57.74, 11.94),
        L.latLng(57.6792, 11.949)
    ], 
    lineOptions: {
      styles: [
        {
          color: "blue",
          opacity: 0.6,
          weight: 4
        }
      ]
    
    }
})

  return (
    <>
    <ParentContainer/>
   <MapContainer id='map' center={center} zoom={13} scrollWheelZoom={false}>

  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position}>
      <Popup>
        Starting point. <br />  6 Southwark St, London SE1 1TQ.
      </Popup>
    </Marker>
</MapContainer>
    </>
  )
}
export default App; 