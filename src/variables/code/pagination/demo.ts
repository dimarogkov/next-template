export const PAGINATION_DEMO_CODE = `'use client';
import { usePagination } from '@/src/hooks';
import { Pagination } from '@/src/components/ui';

const items = Array.from({ length: 100 }, (_, index) => index + 1);

const PaginationDemo = () => {
    const { pagesArr, options } = usePagination(items);

    return (
        <Pagination options={options} className='py-5'>
            <Pagination.Previous />

            {pagesArr.map((page, index) =>
                page === 'ellipsis' ? (
                    <Pagination.Ellipsis key={\`ellipsis-\${index}\`} />
                ) : (
                    <Pagination.Item key={\`page-\${index}\`} page={page} />
                )
            )}

            <Pagination.Next />
        </Pagination>
    );
};

export default PaginationDemo;`;
