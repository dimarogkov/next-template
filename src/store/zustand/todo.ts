import { ITodoState } from '@/src/types/interfaces/TodoState';
import { create } from 'zustand';

export const useTodo = create<ITodoState>((set) => ({
    searchValue: '',
    setSearchValue: (value) => set({ searchValue: value }),
}));
