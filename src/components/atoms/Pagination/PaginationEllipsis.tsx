'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    options?: {
        currentPage: number;
        endPage: number;
        setPage: Dispatch<SetStateAction<number>>;
    };
    className?: string;
}

export const PaginationEllipsis = forwardRef<HTMLDivElement, Props>(({ options, className = '', ...props }, ref) => {
    return (
        <div
            ref={ref}
            {...props}
            aria-hidden="true"
            className={cn(
                'text-title pointer-events-none relative flex size-9 items-center justify-center text-base select-none',
                className
            )}
        >
            ...
        </div>
    );
});

PaginationEllipsis.displayName = 'PaginationEllipsis';
