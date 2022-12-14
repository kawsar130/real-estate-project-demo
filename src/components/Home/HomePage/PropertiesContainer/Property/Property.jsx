import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../../redux/feature/cartSlice';
import HouseInfo from './HouseInfo/HouseInfo';
import HouseType from './HouseType/HouseType';
import {
  propertyContainer,
  imgContainerStyle,
  cardContentContainer,
  askingPriceStyle,
  buttonStyle,
  nameTextStyle,
  addressTextStyle,
  locateButtonStyle,
} from './style';
import './Property.css';

const Property = ({ property, handleClick }) => {
  const { name, asking_price, address, house_info, house_type, image } = property;
  const dispatch = useDispatch();

  return (
    <Grid item xs={12} md={6} lg={4} sx={propertyContainer}>
      <Card elevation={0} sx={{ maxWidth: 345 }}>
        <Box sx={{ position: 'relative', mx: 1 }} className="img-container">
          <Box className="hover-shadow-container" sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={() => handleClick(property)}
              variant="contained"
              size="small"
              sx={locateButtonStyle}
            >
              Locate on Map
            </Button>
          </Box>
          <HouseType house_type={house_type} />
          <Box sx={imgContainerStyle} />
          <CardMedia
            component="img"
            alt="green iguana"
            height="230"
            image={image}
            sx={{ borderRadius: 3 }}
          />
          <HouseInfo house_info={house_info} />
        </Box>
        <CardContent>
          <Box sx={cardContentContainer}>
            <Box>
              <Typography variant="caption" sx={{ fontWeight: '500' }}>
                Asking Price
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={askingPriceStyle}
              >
                ${asking_price}
              </Typography>
            </Box>
            <Box>
              <Button
                onClick={() => dispatch(addToCart(property))}
                size="small"
                variant="contained"
                sx={buttonStyle}
              >
                Buy
              </Button>
            </Box>
          </Box>
          <Typography
            variant="subtitle2"
            color="text.primary"
            sx={nameTextStyle}
          >
            {name}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={addressTextStyle}
          >
            {address}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default Property;
