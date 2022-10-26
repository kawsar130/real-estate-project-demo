import { Box, Grid, Typography } from '@mui/material';
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
        height: { xs: '89vh', xl: '92vh' },
        overflowY: 'scroll',
      }}
    >
      <Typography variant="h5" sx={{ fontSize: '1.2em', mb: 2 }}>
        Properties
      </Typography>
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
