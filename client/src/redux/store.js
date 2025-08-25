import { configureStore } from '@reduxjs/toolkit';
import filesReducer from './filesSlice.js';
import userReducer, { getUserDataFromCookies } from './userSlice.js';

const preloadedState = {
  user: getUserDataFromCookies(),
};

export const store = configureStore({
  reducer: {
    files: filesReducer,
    user: userReducer,
  },
  preloadedState,
});
