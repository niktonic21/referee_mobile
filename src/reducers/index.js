import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
// ... other reducers

export default combineReducers({
  //routes,
  auth: AuthReducer
});
