import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import {thunk} from 'redux-thunk';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'tasks'] // Only persist these reducers
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
//   middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);