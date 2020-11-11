import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = {
  showAlert: false,
  type: null,
  message: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        showAlert: true,
        type: action.payload.type,
        message: action.payload.message,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        showAlert: false,
        type: null,
        message: null,
      };
    default:
      return state;
  }
};
