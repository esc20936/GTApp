import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
    name: 'User',
    initialState: {
        name: '',
        email: '',
    },
    reducers: {
        action: (state, action) => {
            state.state = action.payload
        }
    }
});

export const { action } = UserSlice.actions;
