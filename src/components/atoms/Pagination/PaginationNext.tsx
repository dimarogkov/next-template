'use client';
import { ButtonHTMLAttributes, Dispatch, forwardRef, RefAttributes, SetStateAction } from 'react';
import { ChevronRight } from 'lucide-react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    options?: {
        currentPage: number;
        endPage: number;
        setPage: Dispatch<SetStateAction<number>>;
    };
    className?: string;
}

const PaginationNext = forwardRef<HTMLButtonElement, Props>(({ options, className = '', ...props }, ref) => {
    const { currentPage = 1, endPage, setPage = () => {} } = options ?? {};

    const toggleNext = () => setPage(currentPage + 1);

    return (
        <button
            ref={ref}
            {...props}
            type='button'
            disabled={currentPage === endPage}
            onClick={toggleNext}
            className={cn(
                `relative flex items-center justify-center size-9 text-title rounded-md transition-colors duration-300 hover:bg-border ${className}`,
                {
                    'opacity-60 pointer-events-none select-none': currentPage === endPage,
                }
            )}
        >
            <ChevronRight className='size-5' />
        </button>
    );
});

PaginationNext.displayName = 'PaginationNext';
export default PaginationNext;
