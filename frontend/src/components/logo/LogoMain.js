import PropTypes from 'prop-types';

import hri_banner from './hri_banner.png';

// ==============================|| LOGO SVG ||============================== //

const LogoMain = ({ reverse }) => {
  return <img src={hri_banner} alt="logo banner" width="210" height="40" />;
};

LogoMain.propTypes = {
  reverse: PropTypes.bool
};

export default LogoMain;
