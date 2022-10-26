import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import HouseInfo from './HouseInfo/HouseInfo';
import HouseType from './HouseType/HouseType';

const Property = ({ property }) => {
  const {
    name,
    asking_price,
    address,
    house_info,
    house_type,
    image,
    coordinates,
  } = property;
  console.log(coordinates);
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card elevation={0} sx={{ maxWidth: 345 }}>
        <Box sx={{ position: 'relative', mx: 1 }}>
          <HouseType house_type={house_type} />
          <Box
            sx={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              background: 'transparent',
              boxShadow: 'inset 0px -100px 40px -70px black',
              borderRadius: 3,
            }}
          />
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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'start',
            }}
          >
            <Box>
              <Typography variant="caption" sx={{ fontWeight: '500' }}>
                Asking Price
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ mt: -0.7, py: 0, fontSize: { xs: '1em', xl: '1.2em' } }}
              >
                ${asking_price}
              </Typography>
            </Box>
            <Box>
              <Button
                size="small"
                variant="contained"
                sx={{
                  height: '25px',
                  width: '80px',
                  backgroundColor: '#660033',
                  textTransform: 'capitalize',
                  mt: 0.7,
                  '&:hover': {
                    backgroundColor: 'black',
                  },
                }}
              >
                Buy
              </Button>
            </Box>
          </Box>
          <Typography
            variant="subtitle2"
            color="text.primary"
            sx={{
              lineHeight: '1.2',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              height: '32px',
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{
              fontWeight: 'bold',
              mt: 1,
              lineHeight: '1.2',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              height: '32px',
            }}
          >
            {address}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default Property;
