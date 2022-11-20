import {
  GET_MOVIE_DATA,
  GET_MOVIE_DATA_BY_PAGE,
  GET_MOVIE_DATA_BY_SEARCH,
  GET_MOVIE_DETAILS,
  SET_LOADING,
  CLEAR_LOADING,
} from '../actions/type.js';

let initialValue = {
  movieData: [],
  loading: false,
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
        movieDetails: [],
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
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default movies;
