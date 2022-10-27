import { Box, Typography } from '@mui/material';
import { houseTypeContainerStyle, houseTypeTextStyle } from './style';

const HouseType = ({ house_type }) => {
  console.log(house_type);
  return (
    <Box sx={houseTypeContainerStyle}>
      <Typography variant="caption" sx={houseTypeTextStyle}>
        {house_type}
      </Typography>
    </Box>
  );
};
export default HouseType;
