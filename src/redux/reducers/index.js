import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DataReducer from './DataReducer';
import ProfileReducer from './ProfileReducer';
import UiReducer from './UiReducer';
import ItemsReducer from './ItemsReducer';

export default combineReducers({
    //routes,
    auth: AuthReducer,
    profile: ProfileReducer,
    data: DataReducer,
    ui: UiReducer,
    items: ItemsReducer
});
