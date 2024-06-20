import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CounterState } from '../types/interfaces/CounterState';

const initialState: CounterState = {
    count: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addCount: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        },
        removeCount: (state, action: PayloadAction<number>) => {
            state.count = state.count !== 0 ? state.count - action.payload : 0;
        },
        resetCount: () => initialState,
    },
});

export const { addCount, removeCount, resetCount } = counterSlice.actions;
export default counterSlice.reducer;
