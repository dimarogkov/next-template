import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITodo } from '@interfaces/Todo';
import { API_URL } from '@constants';

const LIMIT_COUNT = 6;
const TODOS_URL = '/todos';

export const todosApiSlice = createApi({
    reducerPath: 'todos',
    tagTypes: ['todos'],
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (build) => ({
        getTodos: build.query<ITodo[], void>({
            query: () => ({ url: TODOS_URL, params: { limit: LIMIT_COUNT } }),
            providesTags: ['todos']
        }),
        createTodo: build.mutation<ITodo, Omit<ITodo, 'id'>>({
            query: (todo) => ({
                url: TODOS_URL,
                method: 'POST',
                body: todo
            }),
            invalidatesTags: ['todos']
        }),
        updateTodo: build.mutation<ITodo, ITodo>({
            query: (todo) => ({
                url: `${TODOS_URL}/${todo.id}`,
                method: 'PATCH',
                body: todo
            }),
            invalidatesTags: ['todos']
        }),
        removeTodo: build.mutation<void, number>({
            query: (todoId) => ({
                url: `${TODOS_URL}/${todoId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['todos']
        })
    })
});

export const { useGetTodosQuery, useCreateTodoMutation, useUpdateTodoMutation, useRemoveTodoMutation } = todosApiSlice;
