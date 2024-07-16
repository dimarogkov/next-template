import axios from 'axios';
import { Todo } from '../types/interfaces/Todo';

const API_URL = 'https://mate.academy/students-api';

export const getTodos = () => {
    return axios.get<Todo[]>(`${API_URL}/todos`);
};

export const createTodo = (todo: Omit<Todo, 'id'>) => {
    return axios.post<Todo>(`${API_URL}/todos`, todo);
};

export const updateTodo = (todo: Todo) => {
    return axios.patch<Todo>(`${API_URL}/todos/${todo.id}`, { completed: !todo.completed });
};

export const deleteTodo = (todoId: number) => {
    return axios.delete<Todo>(`${API_URL}/todos/${todoId}`);
};
