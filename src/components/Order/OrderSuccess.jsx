import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart } from '../../redux/feature/cartSlice';
import { successContainerStyle, buttonTextStyle } from './style';

const OrderSuccess = () => {
  const { totalCount, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return totalCount !== 0 ? (
    <Box sx={successContainerStyle}>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        Thank you for your purchase.
      </Typography>
      <Typography variant="subtitle2" sx={{ mt: 1 }}>
        You have purchased {totalCount}{' '}
        {totalCount < 2 ? 'property' : 'properties'} for ${totalAmount}
      </Typography>
      <Button variant="text" onClick={dispatch(clearCart)}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography variant="h6" sx={buttonTextStyle}>
            Go back to Store
          </Typography>
        </Link>
      </Button>
    </Box>
  ) : (
    <Box sx={successContainerStyle}>
      <Typography variant="h4">You did not order anything yet!</Typography>
      <Button variant="text" onClick={dispatch(clearCart)}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography variant="h6" sx={buttonTextStyle}>
            Go to Store
          </Typography>
        </Link>
      </Button>
    </Box>
  );
};
export default OrderSuccess;
