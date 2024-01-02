// anton/src/store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // If you are using middleware like Redux Thunk

import rootReducer from './Reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
