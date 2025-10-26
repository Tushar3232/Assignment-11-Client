import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// Leaflet default icon fix
const defaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MarkerPopup({ district }) {
  if (!district.latitude || !district.longitude) return null;

  return (
    <Marker position={[district.latitude, district.longitude]} icon={defaultIcon}>
      <Popup>
        <div className="text-sm">
          <h2 className="font-semibold text-lg mb-1">{district.district}</h2>
          <p><strong>Region:</strong> {district.region}</p>
          <p><strong>City:</strong> {district.city}</p>
          <p><strong>Areas:</strong> {district.covered_area.join(", ")}</p>
          {district.flowchart && (
            <p className="mt-1">
              <a href={district.flowchart} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                View Flowchart
              </a>
            </p>
          )}
        </div>
      </Popup>
    </Marker>
  );
}
