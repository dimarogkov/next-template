import { forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const CarouselWrapper = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return <div ref={ref} {...props} className={`relative w-full ${className}`} />;
});

CarouselWrapper.displayName = 'CarouselWrapper';
export default CarouselWrapper;
