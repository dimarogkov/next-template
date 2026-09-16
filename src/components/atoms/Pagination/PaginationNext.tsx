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

export const PaginationNext = forwardRef<HTMLButtonElement, Props>(({ options, className = '', ...props }, ref) => {
    const { currentPage = 1, endPage, setPage = () => {} } = options ?? {};

    const toggleNext = () => setPage(currentPage + 1);

    return (
        <button
            ref={ref}
            {...props}
            type="button"
            disabled={currentPage === endPage}
            onClick={toggleNext}
            className={cn(
                'text-title hover:bg-border relative flex size-9 cursor-pointer items-center justify-center rounded-md transition-colors duration-300',
                className,
                {
                    'pointer-events-none opacity-60 select-none': currentPage === endPage
                }
            )}
        >
            <ChevronRight className="size-5" />
        </button>
    );
});

PaginationNext.displayName = 'PaginationNext';
