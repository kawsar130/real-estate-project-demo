import { AppBar, Badge, Box, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCartTotal } from '../../redux/feature/cartSlice';
import { appBarStyle, toolbarStyle, linkStyle, cartTextStyle } from './style';

const NavBar = () => {
  const { totalCount, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [items]);

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar elevation={0} sx={appBarStyle}>
        <Toolbar sx={toolbarStyle}>
          <Link to="/" style={linkStyle}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 'bold' }}
            >
              SHOP
            </Typography>
          </Link>
          <Link to="/cart" style={linkStyle}>
            <Badge badgeContent={totalCount} color="success">
              <Typography variant="h6" component="div" sx={cartTextStyle}>
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
