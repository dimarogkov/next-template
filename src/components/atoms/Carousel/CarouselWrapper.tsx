import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

export const CarouselWrapper = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <div
            ref={ref}
            {...props}
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            className={cn('relative w-full outline-hidden', className)}
        />
    );
});

CarouselWrapper.displayName = 'CarouselWrapper';
