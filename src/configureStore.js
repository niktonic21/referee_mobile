import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';


export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(ReduxThunk));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
