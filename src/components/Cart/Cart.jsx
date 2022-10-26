import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../miscellaneous/LoadingSpinner';
import CartItem from './CartItem/CartItem';

const Cart = () => {
  const [properties, setProperties] = useState([]);
  const [errorText, setErrorText] = useState('');

  const fetchProperties = async () => {
    const response = await fetch('https://api.globalomls.com/api/properties');
    if (!response.ok) {
      throw new Error('Property data could not be fetched');
    } else {
      return response.json();
    }
  };

  // Loading data from the API
  useEffect(() => {
    fetchProperties()
      .then((res) => {
        setProperties(res);
      })
      .catch((error) => {
        console.log(error.message);
        setErrorText(error.message);
      });
  }, []);

  if (!properties.length) {
    return <LoadingSpinner error={errorText} />;
  }
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
        {properties.map((property, index) => (
          <CartItem key={index} property={property} />
        ))}
      </Box>
      <Box
        sx={{
          mx: 3,
          borderTop: 2,
          position: 'sticky',
          bottom: '0',
          backgroundColor: 'white',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 1,
          }}
        >
          <Typography variant="h6">Total $600,000</Typography>
          <Button variant="text">
            <Typography
              variant="h6"
              sx={{ backgroundColor: 'black', color: 'white', px: 2 }}
            >
              Checkout
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Cart;
