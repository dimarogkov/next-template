import { configureStore } from '@reduxjs/toolkit';
import countReducer from './countReducer.ts';
import { TypedUseSelectorHook, createDispatchHook, createSelectorHook } from 'react-redux';

export const store = configureStore({
    reducer: {
        count: countReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = createDispatchHook<RootState>();
export const useAppSelector: TypedUseSelectorHook<RootState> = createSelectorHook();
