export const convertUrlToString = (url: string) => {
    return url
        .replaceAll('%20', ' ')
        .replaceAll('_', ' ')
        .replaceAll('/', '')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};
