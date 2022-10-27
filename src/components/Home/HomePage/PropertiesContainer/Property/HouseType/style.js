import badge from '../../../../../../images/badge.png';

const houseTypeContainerStyle = {
  position: 'absolute',
  background: `url(${badge})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  p: 0.3,
  height: '40px',
  width: '100%',
  top: '10px',
  ml: -1.5,
};

const houseTypeTextStyle = { fontWeight: 'bold', color: 'white', ml: 1.5 };

export { houseTypeContainerStyle, houseTypeTextStyle };
