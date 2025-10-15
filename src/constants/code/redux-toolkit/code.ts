export const REDUX_TOOLKIT_CODE = `import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, createDispatchHook, createSelectorHook } from 'react-redux';
import countSlice from './countSlice';

export const store = configureStore({
    reducer: {
        count: countSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = createDispatchHook<RootState>();
export const useAppSelector: TypedUseSelectorHook<RootState> = createSelectorHook();`;

export const REDUX_TOOLKIT_PROVIDER_CODE = `import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@store/redux-toolkit';

type Props = {
    children?: ReactNode;
};

export default function StoreProvider({ children }: Props) {
    return <Provider store={store}>{children}</Provider>;
}`;

export const REDUX_TOOLKIT_COUNT_CODE = `import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICountState {
    count: number;
}

const initialState: ICountState = {
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
export default countSlice.reducer;`;
