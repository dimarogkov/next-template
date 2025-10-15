import { useState } from 'react';
import { getPaginationRange } from '@utils';

export default function usePagination<T extends any[]>(arr: T, perPage: number = 10) {
    const [page, setPage] = useState(1);

    const start = (page - 1) * perPage;
    const end = page * perPage;
    const data = arr.slice(start, end);

    const endPage = Math.ceil(arr.length / perPage);
    const pagesArr = getPaginationRange(page, endPage);

    const options = { currentPage: page, endPage, setPage };

    return {
        data,
        pagesArr,
        options,
    };
}
