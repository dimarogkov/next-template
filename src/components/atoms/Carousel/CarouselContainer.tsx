import { forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const CarouselContainer = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return <div ref={ref} {...props} className={`flex touch-pan-y ${className}`} />;
});

CarouselContainer.displayName = 'CarouselContainer';
export default CarouselContainer;
