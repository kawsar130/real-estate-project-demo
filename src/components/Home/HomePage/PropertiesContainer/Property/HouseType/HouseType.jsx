import { Box, Typography } from '@mui/material';
import { houseTypeContainerStyle, houseTypeTextStyle } from './style';

const HouseType = ({ house_type }) => (
  <Box sx={houseTypeContainerStyle} className="house-type-info">
    <Typography variant="caption" sx={houseTypeTextStyle}>
      {house_type}
    </Typography>
  </Box>
);
export default HouseType;
