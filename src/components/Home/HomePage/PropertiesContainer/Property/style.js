const propertyContainer = { display: 'flex', justifyContent: 'center' };

const imgContainerStyle = {
  height: '100%',
  width: '100%',
  position: 'absolute',
  background: 'transparent',
  boxShadow: 'inset 0px -100px 40px -70px black',
  borderRadius: 3,
};

const cardContentContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
};

const askingPriceStyle = {
  mt: -0.7,
  py: 0,
  fontSize: { xs: '1em', xl: '1.2em' },
};

const buttonStyle = {
  height: '25px',
  width: '80px',
  backgroundColor: '#444444',
  textTransform: 'capitalize',
  mt: 0.7,
  '&:hover': {
    backgroundColor: 'black',
  },
};

const nameTextStyle = {
  lineHeight: '1.2',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  height: '32px',
};

const addressTextStyle = {
  fontWeight: 'bold',
  mt: 1,
  lineHeight: '1.2',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  height: '32px',
};

const locateButtonStyle = {
  backgroundColor: 'darkSalmon',
  '&:hover': {
    backgroundColor: 'darkKhaki',
  },
};

export {
  propertyContainer,
  imgContainerStyle,
  cardContentContainer,
  askingPriceStyle,
  buttonStyle,
  nameTextStyle,
  addressTextStyle,
  locateButtonStyle,
};
