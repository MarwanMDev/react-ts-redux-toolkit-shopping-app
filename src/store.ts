import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import authSlice from './features/auth/authSlice';
import themeSlice from './features/theme/themeSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    theme: themeSlice,
  },
  // middleware: new MiddlewareArray().concat(logger),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
