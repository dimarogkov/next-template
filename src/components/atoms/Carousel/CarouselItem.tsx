import { forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const CarouselItem = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return <div ref={ref} {...props} className={`relative flex-none basis-full min-w-0 ${className}`} />;
});

CarouselItem.displayName = 'CarouselItem';
export default CarouselItem;
