import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement>, RefAttributes<HTMLSpanElement> {
    className?: string;
}

const Badge: FC<Props> = forwardRef<HTMLSpanElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <span
            ref={ref}
            {...props}
            className={`flex items-center gap-1.5 text-base px-3 py-1.5 rounded-md bg-border ${className}`}
        />
    );
});

Badge.displayName = 'Badge';
export default Badge;
