import { Box } from '@mui/material';

const Map = () => {
  console.log('Map');
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, width: '40vw', height: '90vh' }}
    >
      <Box>
        <img
          width="100%"
          src="https://images.squarespace-cdn.com/content/v1/54ff63f0e4b0bafce6932642/1598386942339-YZXE8XZ07O4ZOW2KTLHZ/New+York.gif"
          alt="map"
        />
      </Box>
    </Box>
  );
};
export default Map;
