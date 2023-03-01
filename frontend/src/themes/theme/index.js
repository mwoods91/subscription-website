import PropTypes from "prop-types";

// project import
import Default from "./default";

// ==============================|| PRESET THEME - THEME SELECTOR ||============================== //

const Theme = (colors) => {
      return Default(colors);
  }


Theme.propTypes = {
  colors: PropTypes.object,
  presetColor: PropTypes.any,
};

export default Theme;
