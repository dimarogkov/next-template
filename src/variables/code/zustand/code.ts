export const ZUSTAND_CODE = `import { useCount } from './count';

export { useCount };`;

export const ZUSTAND_COUNT_CODE = `import { create } from 'zustand';

interface ICountStore {
    count: number;
    addCount: (count: number) => void;
    removeCount: (count: number) => void;
    resetCount: () => void;
}

export const useCount = create<ICountStore>((set) => ({
    count: 0,
    addCount: (count) => set((state) => ({ count: state.count + count })),
    removeCount: (count) => set((state) => ({ count: state.count !== 0 ? state.count - count : 0 })),
    resetCount: () => set({ count: 0 }),
}));`;
