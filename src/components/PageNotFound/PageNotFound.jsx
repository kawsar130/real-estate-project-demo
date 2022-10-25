import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const PageNotFound = () => (
  <Box
    sx={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Typography variant="h3">Error 404! Page Not Found!</Typography>
  </Box>
);
export default PageNotFound;
