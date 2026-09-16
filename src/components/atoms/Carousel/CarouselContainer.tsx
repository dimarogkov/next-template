import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

export const CarouselContainer = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return <div ref={ref} {...props} className={cn('flex touch-pan-y', className)} />;
});

CarouselContainer.displayName = 'CarouselContainer';
