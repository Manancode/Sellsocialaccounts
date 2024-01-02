// src/actions/index.js
// Define your actions here
// anton/actions/index.js

export const setUser = (userData) => {
    return {
      type: 'SET_USER',
      payload: userData,
    };
  };
  
  export const logOutUser = () => {
    return {
      type: 'LOG_OUT_USER',
    };
  };
  