import { create } from 'zustand';

interface ICountStore {
    count: number;
    addCount: (count: number) => void;
    removeCount: (count: number) => void;
    resetCount: () => void;
}

export const useCount = create<ICountStore>((set) => ({
    count: 0,
    addCount: (count) => set((state) => ({ count: state.count + count })),
    removeCount: (count) => set((state) => ({ count: Math.max(0, state.count - count) })),
    resetCount: () => set({ count: 0 })
}));
