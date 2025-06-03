"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/images/marker-icon-2x.png",
  iconUrl: "/leaflet/images/marker-icon.png",
  shadowUrl: "/leaflet/images/marker-shadow.png",
});

interface MapProps {
  className?: string;
}

export default function Map({ className }: MapProps) {
  return (
    <MapContainer
      center={[43.20361984325244, 27.91659099714607]}
      zoom={14}
      className={className}
      attributionControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[43.20361984325244, 27.91659099714607]}>
        <Popup>Center of Varna</Popup>
      </Marker>
    </MapContainer>
  );
}
