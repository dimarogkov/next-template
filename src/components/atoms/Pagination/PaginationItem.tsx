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

export const PaginationItem = forwardRef<HTMLButtonElement, Props>(
    ({ options, page, className = '', ...props }, ref) => {
        const { currentPage = 1, setPage = () => {} } = options ?? {};

        const toggleItem = () => setPage(+page);

        return (
            <button
                ref={ref}
                {...props}
                type="button"
                onClick={toggleItem}
                className={cn(
                    'text-title relative flex size-9 cursor-pointer items-center justify-center rounded-md border',
                    className,
                    {
                        'hover:bg-border border-transparent transition-colors duration-300': currentPage !== page,
                        'border-border bg-border pointer-events-none': currentPage === page
                    }
                )}
            >
                {page}
            </button>
        );
    }
);

PaginationItem.displayName = 'PaginationItem';
