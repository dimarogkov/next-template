'use client';
import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    currentPage?: number;
    className?: string;
    setCurrentPage?: (page: number) => void;
}

export const PaginationEllipsis = forwardRef<HTMLDivElement, Props>(
    ({ currentPage, className = '', setCurrentPage, ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                className={cn(
                    'text-title pointer-events-none relative flex size-9 items-center justify-center text-base select-none',
                    className
                )}
            >
                ...
            </div>
        );
    }
);

PaginationEllipsis.displayName = 'PaginationEllipsis';
