export const PAGINATION_USAGE_CODE = `<Pagination>
	<Pagination.Previous />
	<Pagination.Item page={1} />
	<Pagination.Item page={2} />
	<Pagination.Item page={3} />
	<Pagination.Item page={4} />
	<Pagination.Item page={5} />
	<Pagination.Ellipsis />
	<Pagination.Item page={10} />
	<Pagination.Next />
</Pagination>`;

export const PAGINATION_DATA_USAGE_CODE = `'use client';
import { usePagination } from '@hooks';
import { Pagination } from '@components/atoms';

const ITEMS = Array.from({ length: 100 }, (_, index) => index + 1);

export default function PaginationWithData() {
    const { data, pagesArr, options } = usePagination(items);

    return (
        <>
            {data.map((item) => (
                <p key={item}>Lorem ipsum dolor sit {item}</p>
            ))}
                
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
        </>
    );
}`;
