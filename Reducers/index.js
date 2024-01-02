// anton/src/reducers/index.js
import { combineReducers } from 'redux';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'LOG_OUT_USER':
      return null;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
