import { Box, CircularProgress, Alert } from '@mui/material';

const LoadingSpinner = ({ error }) => (
  <Box
    sx={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {error ? (
      <Alert severity="error">
        {error.message}! Please Check Your Network and Reload Again!
      </Alert>
    ) : (
      <CircularProgress />
    )}
  </Box>
);
export default LoadingSpinner;
