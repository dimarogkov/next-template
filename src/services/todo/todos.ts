import axios from 'axios';
import { API_URL } from '@constants';
import { ITodo } from '@interfaces/Todo';

export const getTodos = () => {
    return axios.get<ITodo[]>(`${API_URL}/todos?limit=6`);
};

export const createTodo = (todo: Omit<ITodo, 'id'>) => {
    return axios.post<ITodo>(`${API_URL}/todos`, todo);
};

export const updateTodo = (todo: ITodo) => {
    return axios.patch<ITodo>(`${API_URL}/todos/${todo.id}`, todo);
};

export const removeTodo = (todoId: number) => {
    return axios.delete<ITodo>(`${API_URL}/todos/${todoId}`);
};
