import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DataReducer from './DataReducer';
import ProfileReducer from './ProfileReducer';

export default combineReducers({
  //routes,
  auth: AuthReducer,
  profile: ProfileReducer,
  data: DataReducer
});
