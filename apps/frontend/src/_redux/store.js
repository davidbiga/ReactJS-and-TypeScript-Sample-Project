import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { reduxBatch } from '@manaflair/redux-batch';
import { persistStore } from 'redux-persist';
import { rootReducer, rootSaga } from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = (getDefaultMiddleware) => getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [
      'persist/REGISTER',
      'persist/FLUSH',
      'persist/REHYDRATE',
      'persist/PAUSE',
      'persist/PERSIST',
      'persist/PURGE',
      'persist/REGISTER',
    ],
  },
}).concat([
  sagaMiddleware,
]);

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [reduxBatch],
});

/**
 * @see https://github.com/rt2zz/redux-persist#persiststorestore-config-callback
 * @see https://github.com/rt2zz/redux-persist#persistor-object
 */
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
