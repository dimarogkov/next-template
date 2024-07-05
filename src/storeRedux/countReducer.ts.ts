import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CountState } from '../types/interfaces/CountState';

const initialState: CountState = {
    count: 0,
};

const countSlice = createSlice({
    name: 'count',
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

export const { addCount, removeCount, resetCount } = countSlice.actions;
export default countSlice.reducer;
