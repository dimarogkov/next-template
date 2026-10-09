export const debounce = <Args extends unknown[]>(callback: (...args: Args) => void, delay: number) => {
    let timeId = 0;

    const debounced = (...args: Args) => {
        window.clearTimeout(timeId);
        timeId = window.setTimeout(() => callback(...args), delay);
    };

    debounced.cancel = () => window.clearTimeout(timeId);

    return debounced;
};
