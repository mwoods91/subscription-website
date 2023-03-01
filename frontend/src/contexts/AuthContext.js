// import { createContext, useReducer, useEffect } from 'react';
// import axios from 'axios';

// // import { getUser } from '../utils/user';

// export const AuthContext = createContext();

// export const authReducer = (state, action) => {
//   switch (action.type) {
//     case 'LOGIN':
//       return { user: action.payload, isLoggedIn: true };
//     case 'LOGOUT':
//       return { user: null, isLoggedIn: false };
//     default:
//       return state;
//   }
// };

// export const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, {
//     user: null,
//     isLoggedIn: false
//   });

//   //   useEffect(() => {
//   //     // const user = JSON.parse(localStorage.getItem('g-pace'));
//   //     if (user) {
//   //       dispatch({ type: 'LOGIN', isLoggedIn: true, payload: user });
//   //     } else {
//   //       dispatch({ type: 'LOGOUT', isLoggedIn: false });
//   //     }
//   //   }, []);

//   console.log('Auth state:', state);
//   return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
// };
