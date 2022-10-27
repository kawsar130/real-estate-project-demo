const itemContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '500px',
  mb: 2,
  borderRadius: 3,
  border: 1.5,
  position: 'relative',
};

const deleteButtonStyle = {
  position: 'absolute',
  top: 15,
  right: 15,
  color: 'red',
  cursor: 'pointer',
};

const imgContainerStyle = {
  maxWidth: '35%',
  display: 'flex',
  borderRadius: '10px',
};

const itemNameStyle = {
  lineHeight: '1.2',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  height: '32px',
};

const imgStyle = { borderRadius: '10px', width: '100%', objectFit: 'cover' };

const addressStyle = {
  fontWeight: 'bold',
  mt: 1,
  mb: 2,
  whiteSpace: 'nowrap',
  width: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  lineHeight: '1.2',
  height: '16px',
};

export {
  itemContainerStyle,
  deleteButtonStyle,
  imgContainerStyle,
  imgStyle,
  itemNameStyle,
  addressStyle,
};
