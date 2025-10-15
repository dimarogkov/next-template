'use client';
import { ButtonHTMLAttributes, Dispatch, forwardRef, RefAttributes, SetStateAction } from 'react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    options?: {
        currentPage: number;
        endPage: number;
        setPage: Dispatch<SetStateAction<number>>;
    };
    page: string | number;
    className?: string;
}

const PaginationItem = forwardRef<HTMLButtonElement, Props>(({ options, page, className = '', ...props }, ref) => {
    const { currentPage = 1, setPage = () => {} } = options ?? {};

    const toggleItem = () => setPage(+page);

    return (
        <button
            ref={ref}
            {...props}
            type='button'
            onClick={toggleItem}
            className={cn(
                `relative flex items-center justify-center size-9 text-title rounded-md border ${className}`,
                {
                    'border-transparent transition-colors duration-300 hover:bg-border': currentPage !== page,
                    'border-border bg-border pointer-events-none': currentPage === page,
                }
            )}
        >
            {page}
        </button>
    );
});

PaginationItem.displayName = 'PaginationItem';
export default PaginationItem;
