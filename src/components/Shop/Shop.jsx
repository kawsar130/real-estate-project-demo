import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../miscellaneous/LoadingSpinner';

import Map from './Map/Map';
import PropertiesContainer from './PropertiesContainer/PropertiesContainer';

const Shop = () => {
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
    <Box sx={{ px: 3, mt: 4 }}>
      <Typography variant="h5" sx={{ fontSize: '1.2em', mb: 2 }}>
        Properties
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <PropertiesContainer properties={properties} />
        <Map properties={properties} />
      </Box>
    </Box>
  );
};

export default Shop;
