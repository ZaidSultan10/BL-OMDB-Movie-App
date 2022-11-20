import {
  GET_MOVIE_DATA,
  GET_MOVIE_DATA_BY_PAGE,
  GET_MOVIE_DATA_BY_SEARCH,
} from './type.js';
import axios from 'axios';

export const getMovieData = (search) => async (dispatch) => {
  try {
    let { data } = await axios.get(
      `http://www.omdbapi.com/?s=${search}&apikey=674974a6`
    );
    dispatch({ type: GET_MOVIE_DATA, payload: data, search: search });
  } catch (err) {
    console.log('get movie error --- ', err);
  }
};

export const getMovieDataByPage = (page, search) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://www.omdbapi.com/?s=${
        search ? search : 'Inception'
      }&apikey=674974a6&page=${page}`
    );
    dispatch({ type: GET_MOVIE_DATA_BY_PAGE, payload: res.data });
  } catch (err) {
    console.log('err page -->', err);
  }
};

export const getMovieDataBySearch = (search) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?s=${
        search ? search : 'Inception'
      }&apikey=674974a6`
    );
    console.log('data se ---- ', data);
    dispatch({
      type: GET_MOVIE_DATA_BY_SEARCH,
      payload: data,
      search: search ? search : 'Inception',
    });
  } catch (err) {
    console.log('err page -->', err);
  }
};
