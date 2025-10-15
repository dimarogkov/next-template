'use client';
import { usePagination } from '@hooks';
import { Pagination } from '@components/atoms';

const ITEMS = Array.from({ length: 100 }, (_, index) => index + 1);

export default function PaginationDemo() {
    const { pagesArr, options } = usePagination(ITEMS);

    return (
        <Pagination options={options} className='py-5'>
            <Pagination.Previous />

            {pagesArr.map((page, index) =>
                page === 'ellipsis' ? (
                    <Pagination.Ellipsis key={`ellipsis-${index}`} />
                ) : (
                    <Pagination.Item key={`page-${index}`} page={page} />
                )
            )}

            <Pagination.Next />
        </Pagination>
    );
}
