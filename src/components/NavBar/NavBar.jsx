import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  console.log('NavBar');
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={0}
        style={{ position: 'sticky', top: 0 }}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            color: 'black',
          }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 'bold' }}
            >
              SHOP
            </Typography>
          </Link>
          <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 'bold' }}
            >
              Cart
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
