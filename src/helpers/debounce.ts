export const debounce = (callback: Function, delay: number) => {
    let timeId = 0;

    return (...args: any) => {
        window.clearTimeout(timeId);
        timeId = window.setTimeout(() => callback(...args), delay);
    };
};
