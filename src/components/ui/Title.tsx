import { HTMLAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
    className?: string;
}

const Title: React.FC<Props> = forwardRef<HTMLHeadingElement, Props>(({ className = '', ...props }, ref) => (
    <h1
        ref={ref}
        {...props}
        className={`w-full text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black ${className}`}
    />
));

Title.displayName = 'Title';
export default Title;
