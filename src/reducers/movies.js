import {
  GET_MOVIE_DATA,
  GET_MOVIE_DATA_BY_PAGE,
  GET_MOVIE_DATA_BY_SEARCH,
} from '../actions/type.js';

let initialValue = {
  movieData: [],
  message: '',
  search: '',
  movieDetails: [],
};

const movies = (state = initialValue, action) => {
  switch (action.type) {
    case GET_MOVIE_DATA:
      return {
        ...state,
        movieData: action.payload,
        search: action.search,
      };
    case GET_MOVIE_DATA_BY_PAGE:
      return {
        ...state,
        movieData: action.payload,
      };
    case GET_MOVIE_DATA_BY_SEARCH:
      return {
        ...state,
        movieData: action.payload,
        search: action.search,
      };
    default:
      return state;
  }
};

export default movies;
