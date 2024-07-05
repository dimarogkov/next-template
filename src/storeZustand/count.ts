import { create } from 'zustand';

interface CountStore {
    count: number;
    addCount: (count: number) => void;
    removeCount: (count: number) => void;
    resetCount: () => void;
}

export const useCount = create<CountStore>((set) => ({
    count: 0,
    addCount: (count) => set((state) => ({ count: state.count + count })),
    removeCount: (count) => set((state) => ({ count: state.count !== 0 ? state.count - count : 0 })),
    resetCount: () => set({ count: 0 }),
}));