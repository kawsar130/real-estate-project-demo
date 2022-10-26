import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../../miscellaneous/LoadingSpinner';
import Map from './Map/Map';
import PropertiesContainer from './PropertiesContainer/PropertiesContainer';

const HomePage = () => {
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
    <Box sx={{ px: 3 }}>
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

export default HomePage;
