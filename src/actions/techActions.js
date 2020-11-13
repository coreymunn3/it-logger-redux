import axios from 'axios';
import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from './types';

// Get techs from server
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get('/techs');
    dispatch({
      type: GET_TECHS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

//  Set Loading to True
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
