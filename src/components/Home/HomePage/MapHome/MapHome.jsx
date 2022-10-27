import { useRef } from 'react';
import { Box } from '@mui/material';
import { MapContainer, TileLayer } from 'react-leaflet';

import osmProvider from './osmProvider';
import 'leaflet/dist/leaflet.css';

import { mapHomeContainerStyle } from './style';

import MarkerIcon from './MarkerIcon/MarkerIcon';

const MapHome = ({ properties, propertyClicked }) => {
  const center = { lat: 6.887724, lng: -6.448413 };
  const ZOOM_LEVEL = 2;
  const mapRef = useRef(null);

  return (
    <Box component="main" sx={mapHomeContainerStyle} id="map">
      <MapContainer
        center={center}
        zoom={ZOOM_LEVEL}
        ref={mapRef}
        whenCreated={(map) => {
          mapRef.current = map;
        }}
      >
        <TileLayer
          url={osmProvider.mapTiler.url}
          attribution={osmProvider.mapTiler.attribution}
        />

        {properties.map((property, index) => (
          <MarkerIcon
            key={index}
            property={property}
            propertyClicked={propertyClicked}
            mapRef={mapRef}
          />
        ))}
      </MapContainer>
    </Box>
  );
};
export default MapHome;
