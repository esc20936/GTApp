import { createSlice } from '@reduxjs/toolkit';

export const lastTransactionSlice = createSlice({
    name: 'lastTransaction',
    initialState: {
        tipo: '',
        monto: 0,
        fecha: '',
        mensaje: ''
    },
    reducers: {
        setLastTransaction: (state, action) => {
            state.tipo = action.payload.tipo;
            state.monto = action.payload.monto;
            state.fecha = action.payload.fecha;
            state.mensaje = action.payload.mensaje;
        }
    }
});

export const { setLastTransaction } = lastTransactionSlice.actions;
