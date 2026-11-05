'use client';
import { forwardRef, ButtonHTMLAttributes, RefAttributes } from 'react';
import { ChevronRight } from 'lucide-react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    className?: string;
}

export const CarouselNext = forwardRef<HTMLButtonElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <button
            ref={ref}
            {...props}
            type="button"
            aria-label="Next slide"
            className={cn(
                'border-border text-title hover:bg-border relative flex size-9 min-w-9 cursor-pointer items-center justify-center rounded-md border outline-hidden transition-all duration-300',
                className,
                {
                    'pointer-events-none opacity-60 select-none': props.disabled
                }
            )}
        >
            <ChevronRight aria-hidden="true" className="size-5" />
        </button>
    );
});

CarouselNext.displayName = 'CarouselNext';
