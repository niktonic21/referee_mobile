import { createStore, applyMiddleware } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

const STORE_INIT_STATE = {};

const store = createStore(reducers, STORE_INIT_STATE,
    //composeWithDevTools(
      applyMiddleware(ReduxThunk)
//  )
);

export default store;
