import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from './contexts/ConfigContext';
import { Provider as ReduxProvider } from 'react-redux';
import { UserProvider } from './contexts/UserContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReduxProvider store={store}>
    <ConfigProvider>
      <UserProvider>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </UserProvider>
    </ConfigProvider>
  </ReduxProvider>
);
