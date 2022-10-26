import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartTotal } from '../../redux/feature/cartSlice';
import CartItem from './CartItem/CartItem';

const Cart = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [items]);

  return (
    <Box sx={{ height: '89vh', overflowY: 'scroll' }}>
      <Box
        sx={{
          px: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {items.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
        {items.length === 0 && (
          <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center' }}>
            <Typography variant="h4">Your Cart is Empty!</Typography>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          borderTop: 2,
          position: 'fixed',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '96%',
          height: '60px',
          backgroundColor: 'white',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontSize: '1.2em', fontWeight: 'bold' }}
          >
            Total ${totalAmount}
          </Typography>
          {items.length !== 0 && (
            <Button variant="text">
              <Typography
                variant="h6"
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  px: 2,
                  fontSize: '1.2em',
                }}
              >
                Checkout
              </Typography>
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};
export default Cart;
