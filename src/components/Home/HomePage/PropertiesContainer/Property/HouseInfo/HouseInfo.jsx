import { Box, Typography } from '@mui/material';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import GarageIcon from '@mui/icons-material/Garage';
import StraightenIcon from '@mui/icons-material/Straighten';
import {
  houseInfoContainerStyle,
  iconStyle,
  iconTextStyle,
  supTextStyle,
} from './style';

const HouseInfo = ({ house_info }) => {
  const { bed, bath, garage, sqft } = house_info;

  return (
    <Box sx={houseInfoContainerStyle}>
      <Box sx={{ display: 'flex' }}>
        <BedIcon sx={iconStyle} />
        <Typography variant="caption" sx={iconTextStyle}>
          {bed}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <BathtubIcon sx={iconStyle} />
        <Typography variant="caption" sx={iconTextStyle}>
          {bath}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <GarageIcon sx={iconStyle} />
        <Typography variant="caption" sx={iconTextStyle}>
          {garage}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <StraightenIcon sx={iconStyle} />
        <Typography variant="caption" sx={iconTextStyle}>
          {sqft}
        </Typography>
        <sup style={supTextStyle}>sqft</sup>
      </Box>
    </Box>
  );
};
export default HouseInfo;
