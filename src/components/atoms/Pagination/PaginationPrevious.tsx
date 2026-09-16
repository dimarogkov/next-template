'use client';
import { ButtonHTMLAttributes, Dispatch, forwardRef, RefAttributes, SetStateAction } from 'react';
import { ChevronLeft } from 'lucide-react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    options?: {
        currentPage: number;
        endPage: number;
        setPage: Dispatch<SetStateAction<number>>;
    };
    className?: string;
}

export const PaginationPrevious = forwardRef<HTMLButtonElement, Props>(({ options, className = '', ...props }, ref) => {
    const { currentPage = 1, setPage = () => {} } = options ?? {};

    const togglePrevious = () => setPage(currentPage - 1);

    return (
        <button
            ref={ref}
            {...props}
            type="button"
            disabled={currentPage === 1}
            onClick={togglePrevious}
            className={cn(
                'text-title hover:bg-border relative flex size-9 cursor-pointer items-center justify-center rounded-md transition-colors duration-300',
                className,
                {
                    'pointer-events-none opacity-60 select-none': currentPage === 1
                }
            )}
        >
            <ChevronLeft className="size-5" />
        </button>
    );
});

PaginationPrevious.displayName = 'PaginationPrevious';
