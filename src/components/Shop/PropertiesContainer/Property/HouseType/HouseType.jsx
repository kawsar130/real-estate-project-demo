import { Box, Typography } from '@mui/material';
import badge from '../../../../../images/badge.png';

const HouseType = ({ house_type }) => {
  console.log(house_type);
  return (
    <Box
      sx={{
        position: 'absolute',
        background: `url(${badge})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        p: 0.3,
        height: '40px',
        width: '100%',
        top: '10px',
        ml: -1.5,
      }}
    >
      <Typography
        variant="caption"
        sx={{ fontWeight: 'bold', color: 'white', ml: 1.5 }}
      >
        {house_type}
      </Typography>
    </Box>
  );
};
export default HouseType;
