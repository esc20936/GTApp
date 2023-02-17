import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
    name: 'User',
    initialState: {
        email: '',
        balance : 0,
    },
    reducers: {
        setUserData: (state, action) => {
            state.email = action.payload.correo;
            state.balance = action.payload.balance;
        }
    }
});

export const { setUserData } = UserSlice.actions;
