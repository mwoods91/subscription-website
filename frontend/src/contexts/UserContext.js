import React from 'react';
import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    user: {},
    confirmtoken: ''
  });

  useEffect(() => {
    setState(JSON.parse(localStorage.getItem('auth')));
  }, []);

  // axios config
  const confirmtoken = state && state.confirmtoken ? state.confirmtoken : '';
  axios.defaults.baseURL = process.env.REACT_APP_API;
  axios.defaults.headers.common['Authorization'] = `Bearer ${confirmtoken}`;
  // axios.defaults.headers.post['Authorization'] = `Bearer ${confirmtoken}`;

  return <UserContext.Provider value={[state, setState]}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
