import axios from 'axios';
import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from './types';

export const getLogs = () => async (dispatch) => {
  try {
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

// Add new log
export const addLog = (log) => async (dispatch) => {
  try {
    const res = await axios.post('/logs', log);
    dispatch({
      type: ADD_LOG,
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
