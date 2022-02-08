import { configureStore } from '@reduxjs/toolkit';
import RootReducer from '../reducer';

export const store = configureStore({
  reducer: {
    counter: RootReducer,
  },
});
