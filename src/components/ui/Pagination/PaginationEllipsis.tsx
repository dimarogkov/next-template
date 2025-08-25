'use client';
import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    currentPage?: number;
    className?: string;
    setCurrentPage?: (page: number) => void;
}

const PaginationEllipsis: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ currentPage, className = '', setCurrentPage = () => {}, ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                className={`relative flex items-center justify-center size-9 text-title text-base select-none pointer-events-none ${className}`}
            >
                ...
            </div>
        );
    }
);

PaginationEllipsis.displayName = 'PaginationEllipsis';
export default PaginationEllipsis;
