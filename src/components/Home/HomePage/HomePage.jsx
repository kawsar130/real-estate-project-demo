import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import LoadingSpinner from '../../miscellaneous/LoadingSpinner';
import MapHome from './MapHome/MapHome';

import PropertiesContainer from './PropertiesContainer/PropertiesContainer';

const HomePage = () => {
  const [properties, setProperties] = useState([]);
  const [propertyClicked, setPropertyClicked] = useState({});
  const [errorText, setErrorText] = useState('');

  // function declaration for fetching data
  const fetchProperties = async () => {
    const response = await fetch(process.env.REACT_APP_PROPERTIES_API);
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

  // spinner for loading time and shows error when failed to load
  if (!properties.length) {
    return <LoadingSpinner error={errorText} />;
  }

  const handleClick = (item) => {
    setPropertyClicked(item);
  };

  return (
    <Box sx={{ px: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <PropertiesContainer
          properties={properties}
          handleClick={handleClick}
        />
        <MapHome properties={properties} propertyClicked={propertyClicked} />
      </Box>
    </Box>
  );
};

export default HomePage;
