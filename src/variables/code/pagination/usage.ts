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

export const PAGINATION_HOOK_USAGE_CODE = `const { data, pagesArr, options } = usePagination([1, 2, 3, 4, 5]);`;

export const PAGINATION_DATA_USAGE_CODE = `{data.map((item) => (
	<p key={item}>Lorem ipsum dolor sit {item}</p>
))}`;

export const PAGINATION_PAGES_USAGE_CODE = `<Pagination options={options} disabled={pagesArr.length === 1}>
	<Pagination.Previous />

	{pagesArr.map((page, index) =>
		page === 'ellipsis' ? (
			<Pagination.Ellipsis key={\`ellipsis-\${index}\`} />
		) : (
			<Pagination.Item key={\`page-\${index}\`} page={page} />
		)
	)}

	<Pagination.Next />
</Pagination>`;
