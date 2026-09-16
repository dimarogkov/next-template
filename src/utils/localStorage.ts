export const LOCAL_STORAGE_KEY = 'arr';

export const setDataToLocalStorage = (arr: []) => {
    return localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(arr));
};

export const getDataFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
};
