import { HTMLAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
    className?: string;
}

const Title: React.FC<Props> = forwardRef<HTMLHeadingElement, Props>(({ className = '', ...props }, ref) => (
    <h1
        ref={ref}
        {...props}
        className={`w-full text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-bold ${className}`}
    />
));

Title.displayName = 'Title';
export default Title;
