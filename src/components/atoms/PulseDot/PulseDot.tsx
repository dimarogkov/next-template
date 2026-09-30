import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLSpanElement>, RefAttributes<HTMLSpanElement> {
    className?: string;
}

export const PulseDot = forwardRef<HTMLSpanElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <span ref={ref} {...props} className={cn('relative flex size-2', className)}>
            <span className="bg-blue animate-pulse-ring absolute size-full rounded-full" />
            <span className="bg-blue relative size-full rounded-full" />
        </span>
    );
});

PulseDot.displayName = 'PulseDot';
