import PaginationWrapper from './PaginationWrapper';
import PaginationPrevious from './PaginationPrevious';
import PaginationItem from './PaginationItem';
import PaginationNext from './PaginationNext';
import PaginationEllipsis from './PaginationEllipsis';

export const Pagination = Object.assign(PaginationWrapper, {
    Previous: PaginationPrevious,
    Item: PaginationItem,
    Next: PaginationNext,
    Ellipsis: PaginationEllipsis,
});
