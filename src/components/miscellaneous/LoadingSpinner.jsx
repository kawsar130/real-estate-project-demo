import { Box, CircularProgress, Alert } from '@mui/material';

// Spinner during data loading.

const LoadingSpinner = ({ error }) => (
  <Box
    sx={{
      height: '90vh',
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
      <CircularProgress color="inherit" />
    )}
  </Box>
);
export default LoadingSpinner;
