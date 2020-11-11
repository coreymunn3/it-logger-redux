import { combineReducers } from 'redux';
import logReducer from './logReducer';
import alertReducer from './alertReducer';

export default combineReducers({
  log: logReducer,
  alert: alertReducer,
});
