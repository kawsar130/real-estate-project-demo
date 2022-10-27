import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Box, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import markerImage from '../../../../../images/marker.png';
import {
  markerContainerStyle,
  markerImgContainerStyle,
  markerImgStyle,
  addressTextStyle,
  askingPriceStyle,
} from './style';

// MarkerIcon setup and calibration
const markerIcon = new L.Icon({
  iconUrl: markerImage,
  iconSize: [35, 35],
  iconAnchor: [20, 20], // [Left/right, top/bottom]
  popupAnchor: [-3, -20],
});

const MarkerIcon = ({ property, propertyClicked, mapRef }) => {
  const markerRef = useRef(null);
  useEffect(() => {
    // checking whether the selected item is matched and display them as popup on map
    if (property.name === propertyClicked.name) {
      const map = mapRef.current;
      if (!map) {
        return;
      }
      map.flyTo([property.coordinates.lat, property.coordinates.lng], 7);
      const marker = markerRef.current;
      if (marker) {
        marker.openPopup();
      }
    }
  }, [propertyClicked]);

  return (
    <Marker
      position={[property.coordinates.lat, property.coordinates.lng]}
      icon={markerIcon}
      ref={markerRef}
    >
      <Popup>
        <Box sx={markerContainerStyle}>
          <Box sx={markerImgContainerStyle}>
            <img
              src={property.image}
              alt={property.house_type}
              style={markerImgStyle}
            />
          </Box>
          <Box sx={{ p: 0.3 }}>
            <Typography variant="subtitle2" sx={{ fontSize: '1em' }}>
              {property.house_type}
            </Typography>
            <Typography variant="body" sx={addressTextStyle}>
              {property.address}
            </Typography>
            <Typography variant="h6" sx={askingPriceStyle}>
              ${property.asking_price}
            </Typography>
          </Box>
        </Box>
      </Popup>
    </Marker>
  );
};
export default MarkerIcon;
