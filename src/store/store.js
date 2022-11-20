import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { index } from '../reducers/index.js';
import { composeWithDevTools } from '@redux-devtools/extension';

export const ConfigureStore = () => {
  const store = createStore(index, composeWithDevTools(applyMiddleware(thunk)));
  return store;
};
