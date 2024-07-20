import { create } from 'zustand';
import { ITodoState } from '../types/interfaces/TodoState';

export const useTodo = create<ITodoState>((set) => ({
    searchValue: '',
    setSearchValue: (value) => set({ searchValue: value }),
}));
