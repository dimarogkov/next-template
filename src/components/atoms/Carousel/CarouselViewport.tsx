import { forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const CarouselViewport = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return <div ref={ref} {...props} className={`relative w-full overflow-hidden ${className}`} />;
});

CarouselViewport.displayName = 'CarouselViewport';
export default CarouselViewport;
