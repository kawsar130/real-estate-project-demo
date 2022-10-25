import { Box, Grid } from '@mui/material';
import Property from './Property/Property';

const drawerWidth = '60vw';

const PropertiesContainer = ({ properties }) => {
  console.log('Products');
  return (
    <Box
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        height: '90vh',
        overflow: 'scroll',
      }}
    >
      <Box sx={{ overflow: 'auto' }}>
        <Grid container spacing={2}>
          {properties.map((property, index) => (
            <Property key={index} property={property} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default PropertiesContainer;
