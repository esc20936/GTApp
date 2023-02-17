import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
    name: 'User',
    initialState: {
        email: '',
        balance : 0,
        id:''
    },
    reducers: {
        setUserData: (state, action) => {
            state.email = action.payload.correo;
            state.balance = action.payload.balance;
            state.id = action.payload.id;
        },
        setBalance: (state, action) => {
            state.balance = action.payload;
        }

    }
});

export const { setUserData,setBalance } = UserSlice.actions;
