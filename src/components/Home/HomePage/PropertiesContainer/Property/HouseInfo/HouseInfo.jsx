import { Box, Typography } from '@mui/material';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import GarageIcon from '@mui/icons-material/Garage';
import StraightenIcon from '@mui/icons-material/Straighten';

const HouseInfo = ({ house_info }) => {
  const { bed, bath, garage, sqft } = house_info;
  console.log(house_info);
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '5px',
        width: '200px',
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <BedIcon sx={{ fontSize: 'medium', color: 'white' }} />
        <Typography variant="caption" sx={{ color: 'white', ml: 0.5 }}>
          {bed}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <BathtubIcon sx={{ fontSize: 'medium', color: 'white' }} />
        <Typography variant="caption" sx={{ color: 'white', ml: 0.5 }}>
          {bath}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <GarageIcon sx={{ fontSize: 'medium', color: 'white' }} />
        <Typography variant="caption" sx={{ color: 'white', ml: 0.5 }}>
          {garage}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <StraightenIcon sx={{ fontSize: 'medium', color: 'white' }} />
        <Typography variant="caption" sx={{ color: 'white', ml: 0.5 }}>
          {sqft}
        </Typography>
        <sup
          style={{
            color: 'white',
            position: 'absolute',
            bottom: '7px',
            right: '-10px',
            fontSize: '0.6em',
            fontWeight: '200',
          }}
        >
          sqft
        </sup>
      </Box>
    </Box>
  );
};
export default HouseInfo;
