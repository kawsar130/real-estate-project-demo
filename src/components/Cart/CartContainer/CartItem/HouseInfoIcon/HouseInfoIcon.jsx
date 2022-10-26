import { Box, Typography } from '@mui/material';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import GarageIcon from '@mui/icons-material/Garage';
import StraightenIcon from '@mui/icons-material/Straighten';

const HouseInfoIcon = ({ house_info }) => {
  const { bed, bath, garage, sqft } = house_info;
  console.log(house_info);
  return (
    <Box
      sx={{
        width: '90%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <BedIcon sx={{ fontSize: 'medium' }} />
        <Typography variant="caption" sx={{ ml: 0.5, fontWeight: 'bold' }}>
          {bed}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', ml: 2 }}>
        <BathtubIcon sx={{ fontSize: 'medium' }} />
        <Typography variant="caption" sx={{ ml: 0.5, fontWeight: 'bold' }}>
          {bath}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', ml: 2 }}>
        <GarageIcon sx={{ fontSize: 'medium' }} />
        <Typography variant="caption" sx={{ ml: 0.5, fontWeight: 'bold' }}>
          {garage}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', ml: 2 }}>
        <StraightenIcon sx={{ fontSize: 'medium' }} />
        <Typography variant="caption" sx={{ ml: 0.5, fontWeight: 'bold' }}>
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
