/**
 * @author  Mark Woods
 */

import PropTypes from 'prop-types';
import { createContext } from 'react';

// imported from project
import config from '../config';
import useLocalStorage from '../hooks/useLocalStorage';

// This is the initial state
const initialState = {
  ...config,
  onChangeContainer: () => {},
  onChangeMode: () => {}
};

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

const ConfigContext = createContext(initialState);

function ConfigProvider({ children }) {
  const [config, setConfig] = useLocalStorage('G Pace Theme', initialState);

  const onChangeContainer = () => {
    setConfig({
      ...config,
      container: !config.container
    });
  };

  const onChangeMode = (mode) => {
    setConfig({
      ...config,
      mode
    });
  };

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        onChangeContainer,
        onChangeMode
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

ConfigProvider.propTypes = {
  children: PropTypes.node
};

export { ConfigProvider, ConfigContext };
