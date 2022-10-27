import { Box, Typography } from '@mui/material';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import GarageIcon from '@mui/icons-material/Garage';
import StraightenIcon from '@mui/icons-material/Straighten';
import { iconContainerStyle, bathTextStyle } from './style';

const HouseInfoIcon = ({ house_info }) => {
  const { bed, bath, garage, sqft } = house_info;

  return (
    <Box sx={iconContainerStyle}>
      <Box sx={{ display: 'flex' }}>
        <BedIcon sx={{ fontSize: 'medium' }} />
        <Typography variant="caption" sx={bathTextStyle}>
          {bed}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', ml: 2 }}>
        <BathtubIcon sx={{ fontSize: 'medium' }} />
        <Typography variant="caption" sx={bathTextStyle}>
          {bath}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', ml: 2 }}>
        <GarageIcon sx={{ fontSize: 'medium' }} />
        <Typography variant="caption" sx={bathTextStyle}>
          {garage}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', ml: 2 }}>
        <StraightenIcon sx={{ fontSize: 'medium' }} />
        <Typography variant="caption" sx={bathTextStyle}>
          {sqft}
        </Typography>
        <sup
          style={{
            fontSize: '0.5em',
          }}
        >
          sqft
        </sup>
      </Box>
    </Box>
  );
};
export default HouseInfoIcon;
