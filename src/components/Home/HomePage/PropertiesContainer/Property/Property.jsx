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
  imgContainerStyle,
  cardContentContainer,
  askingPriceStyle,
  buttonStyle,
  nameTextStyle,
  addressTextStyle,
} from './style';

const Property = ({ property }) => {
  const { name, asking_price, address, house_info, house_type, image } =
    property;
  const dispatch = useDispatch();

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card elevation={0} sx={{ maxWidth: 345 }}>
        <Box sx={{ position: 'relative', mx: 1 }}>
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
