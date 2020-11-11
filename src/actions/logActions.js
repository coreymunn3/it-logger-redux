import axios from 'axios';
import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
} from './types';

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
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/logs', log, config);
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

// Delete a log
export const deleteLog = (id) => async (dispatch) => {
  try {
    await axios.delete(`logs/${id}`);
    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

// Update a log
export const updateLog = (log) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.put(`logs/${log.id}`, log, config);
    dispatch({
      type: UPDATE_LOG,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

// Set Current Log
export const setCurrent = (log) => async (dispatch) => {
  dispatch({
    type: SET_CURRENT,
    payload: log,
  });
};

// Clear Current Log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
