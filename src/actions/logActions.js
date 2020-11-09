import axios from 'axios';
import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get('/logs');
    dispatch({
      type: GET_LOGS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
