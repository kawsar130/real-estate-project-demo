import { Box, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import HouseInfoIcon from './HouseInfoIcon/HouseInfoIcon';
import { remove } from '../../../../redux/feature/cartSlice';
import {
  itemContainerStyle,
  deleteButtonStyle,
  imgContainerStyle,
  imgStyle,
  itemNameStyle,
  addressStyle,
} from './style';

const CartItem = ({ item }) => {
  const { name, asking_price, address, house_info, image } = item;

  const dispatch = useDispatch();

  return (
    <Box sx={itemContainerStyle}>
      <DeleteForeverIcon
        onClick={() => dispatch(remove(name))}
        sx={deleteButtonStyle}
      />
      <Box sx={imgContainerStyle}>
        <img src={image} alt={house_info} style={imgStyle} />
      </Box>
      <Box sx={{ width: '65%', px: 3 }}>
        <Box>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: 'bold' }}
          >
            ${asking_price}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.primary"
            sx={itemNameStyle}
          >
            {name}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={addressStyle}
          >
            {address}
          </Typography>
        </Box>
        <HouseInfoIcon house_info={house_info} />
      </Box>
    </Box>
  );
};
export default CartItem;
