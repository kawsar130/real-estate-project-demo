const containerStyle = {
  px: 3,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const emptyCartStyle = {
  height: '70vh',
  display: 'flex',
  alignItems: 'center',
};

const checkoutContainerStyle = {
  borderTop: 2,
  position: 'fixed',
  bottom: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '96%',
  height: '60px',
  backgroundColor: 'white',
};

const checkoutStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const checkoutButtonStyle = {
  backgroundColor: 'black',
  color: 'white',
  px: 2,
  fontSize: '1.2em',
};

export {
  containerStyle,
  emptyCartStyle,
  checkoutContainerStyle,
  checkoutStyle,
  checkoutButtonStyle,
};
