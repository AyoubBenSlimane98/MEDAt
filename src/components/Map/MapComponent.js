import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  
  const center = [36.4497, 6.2642];

  const positions = [[36.4497, 6.2642]];

  // Polyline coordinates within Algeria
  const polylinePositions = [
    [36.4497, 6.2642],
  ];

  return (
    <MapContainer
      center={center}
      zoom={5}
      style={{ height: '500px', width: '500px' }}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {positions.map((position, idx) => (
        <Marker
          key={`marker-${idx}`}
          position={position}
        >
          <Popup>{`Mila 43 :   ${position}`}</Popup>
        </Marker>
      ))}
      <Polyline
        positions={polylinePositions}
        color='blue'
      />
     
    </MapContainer>
  );
};

export default MapComponent;
