import { Box, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import HouseInfoIcon from './HouseInfoIcon/HouseInfoIcon';

const CartItem = ({ property }) => {
  const { name, asking_price, address, house_info, image } = property;
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: '500px',
        mb: 2,
        borderRadius: 3,
        border: 1.5,
        position: 'relative',
      }}
    >
      <DeleteForeverIcon
        sx={{ position: 'absolute', top: 15, right: 15, color: 'red' }}
      />
      <Box
        sx={{
          maxWidth: '35%',
          display: 'flex',
          borderRadius: '10px',
        }}
      >
        <img
          src={image}
          alt={house_info}
          style={{ borderRadius: '10px', width: '100%', objectFit: 'cover' }}
        />
      </Box>
      <Box sx={{ width: '65%', px: 3 }}>
        <Box>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: 'bold' }}
          >
            ${asking_price}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.primary"
            sx={{
              lineHeight: '1.2',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              height: '32px',
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{
              fontWeight: 'bold',
              mt: 1,
              mb: 2,
              whiteSpace: 'nowrap',
              width: '100%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              lineHeight: '1.2',
              height: '16px',
            }}
          >
            {address}
          </Typography>
        </Box>
        <HouseInfoIcon house_info={house_info} />
      </Box>
    </Box>
  );
};
export default CartItem;
