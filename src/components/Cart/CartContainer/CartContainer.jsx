import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartTotal } from '../../../redux/feature/cartSlice';
import CartItem from './CartItem/CartItem';
import {
  containerStyle,
  emptyCartStyle,
  checkoutContainerStyle,
  checkoutStyle,
  checkoutButtonStyle,
} from './style';

const CartContainer = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [items]);

  return (
    <Box sx={{ height: '89vh', overflowY: 'scroll' }}>
      <Box sx={containerStyle}>
        {items.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
        {items.length === 0 && (
          <Box sx={emptyCartStyle}>
            <Typography variant="h4">Your Cart is Empty!</Typography>
          </Box>
        )}
      </Box>
      <Box sx={checkoutContainerStyle}>
        <Box sx={checkoutStyle}>
          <Typography
            variant="h6"
            sx={{ fontSize: '1.2em', fontWeight: 'bold' }}
          >
            Total ${totalAmount}
          </Typography>
          {items.length !== 0 && (
            <Button variant="text">
              <Link to="/order" style={{ textDecoration: 'none' }}>
                <Typography variant="h6" sx={checkoutButtonStyle}>
                  Checkout
                </Typography>
              </Link>
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};
export default CartContainer;
