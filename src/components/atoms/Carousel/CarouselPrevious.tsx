'use client';
import { forwardRef, ButtonHTMLAttributes, RefAttributes } from 'react';
import { ChevronLeft } from 'lucide-react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    className?: string;
}

export const CarouselPrevious = forwardRef<HTMLButtonElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <button
            ref={ref}
            {...props}
            type="button"
            className={cn(
                'border-border text-title hover:bg-border relative flex size-9 min-w-9 cursor-pointer items-center justify-center rounded-md border outline-hidden transition-colors duration-300',
                className,
                {
                    'pointer-events-none opacity-60 select-none': props.disabled
                }
            )}
        >
            <ChevronLeft className="size-5" />
        </button>
    );
});

CarouselPrevious.displayName = 'CarouselPrevious';
