import axios from 'axios';
import { ITodo } from '../types/interfaces/Todo';

const API_URL = 'https://mate.academy/students-api';

export const getTodos = () => {
    return axios.get<ITodo[]>(`${API_URL}/todos`);
};

export const createTodo = (todo: Omit<ITodo, 'id'>) => {
    return axios.post<ITodo>(`${API_URL}/todos`, todo);
};

export const updateTodo = (todo: ITodo) => {
    return axios.patch<ITodo>(`${API_URL}/todos/${todo.id}`, { completed: !todo.completed });
};

export const deleteTodo = (todoId: number) => {
    return axios.delete<ITodo>(`${API_URL}/todos/${todoId}`);
};
