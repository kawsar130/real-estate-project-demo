const appBarStyle = {
  zIndex: (theme) => theme.zIndex.drawer + 1,
  position: 'sticky',
  top: 0,
};

const toolbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'white',
  color: 'black',
};

const linkStyle = { textDecoration: 'none', color: 'black' };

const cartTextStyle = { fontWeight: 'bold', mr: 0.4 };

export { appBarStyle, toolbarStyle, linkStyle, cartTextStyle };
