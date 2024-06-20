const localStorageKey = 'arr';

export const setDataToLocalStorage = (arr: []) => {
    return localStorage.setItem(localStorageKey, JSON.stringify(arr));
};

export const getDataFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(localStorageKey) || '[]');
};
