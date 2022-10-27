import { Box } from '@mui/material';
import Map from './Map/Map';
import { mapHomeContainerStyle } from './style';
import './mapHome.css';

const MapHome = () => {
  const mapIsReadyCallback = (map) => {
    console.log(map);
  };

  return (
    <Box component="main" sx={mapHomeContainerStyle} id="map">
      <Map mapIsReadyCallback={mapIsReadyCallback} />
    </Box>
  );
};
export default MapHome;
