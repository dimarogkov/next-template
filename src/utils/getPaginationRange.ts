export const getPaginationRange = (currentPage: number, totalPages: number) => {
    const createRange = (start: number, end: number) => {
        const length = end - start + 1;
        return Array.from({ length }, (_, i) => start + i);
    };

    if (totalPages <= 7) {
        return createRange(1, totalPages);
    }

    if (currentPage <= 3) {
        return [...createRange(1, 5), 'ellipsis', totalPages];
    }

    if (currentPage >= totalPages - 2) {
        return [1, 'ellipsis', ...createRange(totalPages - 4, totalPages)];
    }

    return [1, 'ellipsis', ...createRange(currentPage - 1, currentPage + 1), 'ellipsis', totalPages];
};
