// src/Pages/Home/CoverageSection.jsx
import React, { useState, useEffect, useMemo } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerPopup from "../../Componeants/MarkerPopup";

// Auto Zoom to selected district
function MapAutoZoom({ selectedDistrict }) {
  const map = useMap();
  useEffect(() => {
    if (selectedDistrict) {
      map.setView([selectedDistrict.latitude, selectedDistrict.longitude], 10, { animate: true });
    }
  }, [selectedDistrict, map]);
  return null;
}

export default function CoverageSection() {
  const [districts, setDistricts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  // Fetch districts from public JSON
  useEffect(() => {
    fetch("/warehouses.json")
      .then(res => res.json())
      .then(data => setDistricts(data))
      .catch(err => console.error("Error loading districts:", err));
  }, []);

  // Filter districts by search
  const filteredDistricts = useMemo(() => {
    return districts.filter(d =>
      d.district?.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, districts]);

  // Auto-select for zoom
  useEffect(() => {
    const match = districts.find(d => d.district?.toLowerCase() === searchText.toLowerCase());
    setSelectedDistrict(match || null);
  }, [searchText, districts]);

  // Assume your fixed navbar height is 64px (h-16)
  const NAVBAR_HEIGHT = 64;

  return (
    <section className="pt-16 px-4 bg-gray-50"> {/* pt-16 for navbar spacing */}
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            🌍 Share Food Bite
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We connect generous donors with people in need. Our platform currently covers 
            <strong> 64 districts</strong> across Bangladesh. Explore the map below to see 
            how we are spreading surplus food to those who need it most.
          </p>
        </div>

        {/* Search Box */}
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search district..."
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            className="border border-gray-300 p-3 rounded w-full md:w-1/2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <MapContainer
            center={[23.685, 90.3563]}
            zoom={7}
            style={{ height: `calc(70vh - ${NAVBAR_HEIGHT}px)`, width: "100%" }} // Adjust height for navbar
            scrollWheelZoom={true}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="© OpenStreetMap contributors"
            />
            <MapAutoZoom selectedDistrict={selectedDistrict} />
            {filteredDistricts.map(d =>
              d.latitude && d.longitude ? <MarkerPopup key={d.district} district={d} /> : null
            )}
          </MapContainer>
        </div>

        {/* How It Works */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">How It Works</h3>
          <p className="text-gray-600 text-lg">
            Donors can easily add surplus food items with details including quantity, expiry date, and location. 
            Those in need can browse available foods on the map and request for pickup. Our goal is to minimize 
            food waste and provide easy access to food for everyone.
          </p>
        </div>

      </div>
    </section>
  );
}
