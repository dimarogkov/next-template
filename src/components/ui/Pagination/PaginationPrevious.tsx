'use client';
import { ButtonHTMLAttributes, Dispatch, FC, forwardRef, RefAttributes, SetStateAction } from 'react';
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

const PaginationPrevious: FC<Props> = forwardRef<HTMLButtonElement, Props>(
    ({ options, className = '', ...props }, ref) => {
        const { currentPage = 1, setPage = () => {} } = options ?? {};

        const togglePrevious = () => setPage(currentPage - 1);

        return (
            <button
                ref={ref}
                {...props}
                type='button'
                disabled={currentPage === 1}
                onClick={togglePrevious}
                className={cn(
                    `relative flex items-center justify-center size-9 text-title rounded-md transition-colors duration-300 hover:bg-border ${className}`,
                    {
                        'opacity-60 pointer-events-none select-none': currentPage === 1,
                    }
                )}
            >
                <ChevronLeft className='size-5' />
            </button>
        );
    }
);

PaginationPrevious.displayName = 'PaginationPrevious';
export default PaginationPrevious;
