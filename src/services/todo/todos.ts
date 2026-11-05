import axios from 'axios';
import { ITodo } from '@interfaces/Todo';
import { API_URL } from '@constants';

const LIMIT_COUNT = 6;
const TODOS_URL = '/todos';

const todosApi = axios.create({ baseURL: API_URL });

export const getTodos = () => {
    return todosApi.get<ITodo[]>(TODOS_URL, { params: { limit: LIMIT_COUNT } });
};

export const createTodo = (todo: Omit<ITodo, 'id'>) => {
    return todosApi.post<ITodo>(TODOS_URL, todo);
};

export const updateTodo = (todo: ITodo) => {
    return todosApi.patch<ITodo>(`${TODOS_URL}/${todo.id}`, todo);
};

export const removeTodo = (todoId: number) => {
    return todosApi.delete<ITodo>(`${TODOS_URL}/${todoId}`);
};
