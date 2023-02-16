import { configureStore } from '@reduxjs/toolkit';
import {UserSlice} from './User/UserSlce';

export const store = configureStore({
  reducer: {
    User: UserSlice.reducer,
  }
});