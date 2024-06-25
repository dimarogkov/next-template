import { HTMLAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
    className?: string;
}

const Subtitle: React.FC<Props> = forwardRef<HTMLHeadingElement, Props>(({ className = '', ...props }, ref) => (
    <h3
        ref={ref}
        {...props}
        className={`w-full text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-bold ${className}`}
    />
));

Subtitle.displayName = 'Subtitle';
export default Subtitle;
