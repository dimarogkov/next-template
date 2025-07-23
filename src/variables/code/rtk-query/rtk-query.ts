export const RTK_QUERY_CODE = `import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, createDispatchHook, createSelectorHook } from 'react-redux';
import { todosApiSlice } from './todosApiSlice';

export const store = configureStore({
    reducer: {
        [todosApiSlice.reducerPath]: todosApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = createDispatchHook<RootState>();
export const useAppSelector: TypedUseSelectorHook<RootState> = createSelectorHook();`;

export const RTK_QUERY_SLICE_CODE = `import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../variables';
import { ITodo } from '../../types/interfaces/Todo';

export const todosApiSlice = createApi({
    reducerPath: 'todos',
    tagTypes: ['todos'],
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (build) => ({
        getTodos: build.query<ITodo[], {}>({
            query: () => '/todos?limit=6',
            providesTags: ['todos'],
        }),
        createTodo: build.mutation<ITodo, Omit<ITodo, 'id'>>({
            query: (todo) => ({
                url: '/todos',
                method: 'POST',
                body: todo,
            }),
            invalidatesTags: ['todos'],
        }),
        updateTodo: build.mutation<ITodo, ITodo>({
            query: (todo) => ({
                url: \`/todos/\${todo.id}\`,
                method: 'PATCH',
                body: todo,
            }),
            invalidatesTags: ['todos'],
        }),
        removeTodo: build.mutation<void, number>({
            query: (todoId) => ({
                url: \`/todos/\${todoId}\`,
                method: 'DELETE',
            }),
            invalidatesTags: ['todos'],
        }),
    }),
});

export const {
	useGetTodosQuery,
	useCreateTodoMutation,
	useUpdateTodoMutation,
	useRemoveTodoMutation,
} = todosApiSlice;`;
