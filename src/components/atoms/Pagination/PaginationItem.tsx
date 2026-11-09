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
        const { currentPage = 1, setPage } = options ?? {};
        const isActive = currentPage === +page;

        const toggleItem = () => setPage?.(+page);

        return (
            <button
                ref={ref}
                {...props}
                type="button"
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Page ${page}`}
                onClick={toggleItem}
                className={cn(
                    'text-title relative flex size-9 cursor-pointer items-center justify-center rounded-md border',
                    className,
                    {
                        'hover:bg-border border-transparent transition-colors duration-300': !isActive,
                        'border-border bg-border pointer-events-none': isActive
                    }
                )}
            >
                {page}
            </button>
        );
    }
);

PaginationItem.displayName = 'PaginationItem';
