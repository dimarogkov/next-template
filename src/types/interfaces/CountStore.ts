export interface ICountStore {
    count: number;
    addCount: (count: number) => void;
    removeCount: (count: number) => void;
    resetCount: () => void;
}
