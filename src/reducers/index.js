import { combineReducers } from 'redux';
import logReducer from './logReducer';
import alertReducer from './alertReducer';
import techReducer from './techReducer';

export default combineReducers({
  log: logReducer,
  alert: alertReducer,
  tech: techReducer,
});
