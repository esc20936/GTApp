import { configureStore } from '@reduxjs/toolkit';
import {UserSlice} from './User/UserSlce';
import {lastTransactionSlice} from './LastTransaction/LastTransaction';
export const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    lastTransaction: lastTransactionSlice.reducer
  }
});