import { forwardRef, ButtonHTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    isActive: boolean;
    className?: string;
}

export const CarouselDot = forwardRef<HTMLButtonElement, Props>(({ isActive, className = '', ...props }, ref) => {
    return (
        <button
            ref={ref}
            {...props}
            type="button"
            className={cn(
                'relative size-4 cursor-pointer rounded-full border-2 outline-hidden transition-colors duration-300 md:size-5',
                className,
                {
                    'border-title pointer-events-none': isActive,
                    'border-border': !isActive
                }
            )}
        />
    );
});

CarouselDot.displayName = 'CarouselDot';
