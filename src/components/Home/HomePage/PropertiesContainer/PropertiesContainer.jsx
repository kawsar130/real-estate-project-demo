import { Box, Grid, Typography } from '@mui/material';
import Property from './Property/Property';
import { PropertiesContainerStyle } from './style';

const PropertiesContainer = ({ properties, handleClick }) => (
  <Box variant="permanent" sx={PropertiesContainerStyle}>
    <Typography variant="h5" sx={{ fontSize: '1.2em', mb: 2, ml: { xs: 2, md: 0 } }}>
      Properties
    </Typography>
    <Box sx={{ overflow: 'auto' }}>
      <Grid container spacing={2}>
        {properties.map((property, index) => (
          <Property key={index} property={property} handleClick={handleClick} />
        ))}
      </Grid>
    </Box>
  </Box>
);
export default PropertiesContainer;
