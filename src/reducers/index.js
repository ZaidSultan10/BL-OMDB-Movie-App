import { combineReducers } from 'redux';
import movies from './movies.js';

export const index = combineReducers({
  movies: movies,
});
