import { forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const Line: React.FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => (
    <div ref={ref} {...props} className={`relative w-full border-t border-gray my-5 ${className}`}></div>
));

Line.displayName = 'Line';
export default Line;
