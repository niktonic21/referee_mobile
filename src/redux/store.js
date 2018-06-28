import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import reducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['profile', 'items']
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default function configureStore(initialState) {
  const middleware = applyMiddleware(thunk);
  //const middleware = composeWithDevTools(applyMiddleware(thunk));

  const store = createStore(persistedReducer, initialState, compose(middleware));
  const persistor = persistStore(store);
  //persistor.purge();

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return { store, persistor };
}
