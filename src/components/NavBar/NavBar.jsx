import { AppBar, Badge, Box, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  console.log('NavBar');
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={0}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          position: 'sticky',
          top: 0,
        }}
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
            <Badge badgeContent={2} color="success">
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold', mr: 0.4 }}
              >
                Cart
              </Typography>
            </Badge>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
