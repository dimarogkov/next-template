import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, createDispatchHook, createSelectorHook } from 'react-redux';
import counterSlice from './counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = createDispatchHook<RootState>();
export const useAppSelector: TypedUseSelectorHook<RootState> = createSelectorHook();
