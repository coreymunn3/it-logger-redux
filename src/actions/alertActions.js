import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (alert) => (dispatch) => {
  // (alert) assumed to be:
  // { message, type }
  dispatch({
    type: SET_ALERT,
    payload: alert,
  });
  setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
};

export const removeAlert = () => {
  return {
    type: REMOVE_ALERT,
  };
};
