import { create } from 'zustand';
import { ICountStore } from '../types/interfaces/CountStore';

export const useCount = create<ICountStore>((set) => ({
    count: 0,
    addCount: (count) => set((state) => ({ count: state.count + count })),
    removeCount: (count) => set((state) => ({ count: state.count !== 0 ? state.count - count : 0 })),
    resetCount: () => set({ count: 0 }),
}));
