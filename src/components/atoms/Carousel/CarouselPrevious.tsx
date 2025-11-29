'use client';
import { forwardRef, ButtonHTMLAttributes, RefAttributes } from 'react';
import { ChevronLeft } from 'lucide-react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    className?: string;
}

const CarouselPrevious = forwardRef<HTMLButtonElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <button
            ref={ref}
            {...props}
            type='button'
            className={cn(
                `relative flex items-center justify-center size-9 min-w-9 text-title outline-none rounded-md border border-border transition-colors duration-300 hover:bg-border ${className}`,
                {
                    'opacity-60 pointer-events-none select-none': props.disabled,
                }
            )}
        >
            <ChevronLeft className='size-5' />
        </button>
    );
});

CarouselPrevious.displayName = 'CarouselPrevious';
export default CarouselPrevious;
