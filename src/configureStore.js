import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';


export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, composeWithDevTools(
    applyMiddleware(ReduxThunk)));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
