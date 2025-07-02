import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import themeReducer from './slices/themeSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedUser = persistReducer(persistConfig, userReducer);
const persistedTheme = persistReducer(persistConfig, themeReducer);

export const store = configureStore({
  reducer: {
    user: persistedUser,
    theme: persistedTheme,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
