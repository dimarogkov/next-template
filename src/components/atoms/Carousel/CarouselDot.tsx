import { forwardRef, ButtonHTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    isActive: boolean;
    className?: string;
}

const CarouselDot = forwardRef<HTMLButtonElement, Props>(({ isActive, className = '', ...props }, ref) => {
    return (
        <button
            ref={ref}
            {...props}
            type='button'
            className={cn(
                `relative size-4 md:size-5 outline-none rounded-full border-2 transition-colors duration-300 ${className}`,
                {
                    'border-title pointer-events-none': isActive,
                    'border-border': !isActive,
                }
            )}
        />
    );
});

CarouselDot.displayName = 'CarouselDot';
export default CarouselDot;
