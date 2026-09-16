export const debounce = <Args extends unknown[]>(callback: (...args: Args) => void, delay: number) => {
    let timeId = 0;

    return (...args: Args) => {
        window.clearTimeout(timeId);
        timeId = window.setTimeout(() => callback(...args), delay);
    };
};
