export const convertUrlToString = (url: string) => {
    const decoded = decodeURIComponent(url);
    const normalized = decoded.replace(/[_/]/g, ' ');

    return normalized
        .split(/[\s-]+/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};
