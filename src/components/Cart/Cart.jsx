import { Box, Typography } from '@mui/material';

const Cart = () => {
  console.log('Cart');
  return (
    <Box sx={{ px: 3, display: 'flex', justifyContent: 'center' }}>
      <Typography variant="h6">Hello Cart</Typography>
    </Box>
  );
};
export default Cart;
