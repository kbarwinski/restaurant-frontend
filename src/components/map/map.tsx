import { LatLngExpression } from "leaflet";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./map.scss";

const position: LatLngExpression = [51.759247, 19.455982];

function Map() {
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
      </Marker>
    </MapContainer>
  );
}

export default Map;



