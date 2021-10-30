import { Map,MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { useEffect, useState } from 'react';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'


export default function MapData(props) {

    let code = (props.flag + '.png').toLowerCase();
    console.log(code)
    const position = [props.lat,props.lng]
    return (
         <div className="map">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                      <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                     <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
                        <Popup>
                          A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    
                  
                    
                </Marker>
                
            </MapContainer>,
            <div className='flag'>  <img src={'https://flagcdn.com/256x192/'+ code} width="256"  height="192"/></div>
      </div>
    )
}