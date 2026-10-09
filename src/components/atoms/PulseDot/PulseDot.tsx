import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLSpanElement>, RefAttributes<HTMLSpanElement> {
    variant?: 'new' | 'updated';
    className?: string;
}

export const PulseDot = forwardRef<HTMLSpanElement, Props>(({ variant = 'new', className = '', ...props }, ref) => {
    const dotColor = {
        new: 'bg-green',
        updated: 'bg-blue'
    };

    return (
        <span
            ref={ref}
            {...props}
            role="img"
            aria-label={variant === 'new' ? 'New' : 'Updated'}
            className={cn('relative flex size-2', className)}
        >
            <span className={cn('animate-pulse-ring absolute size-full rounded-full', dotColor[variant])} />
            <span className={cn('relative size-full rounded-full', dotColor[variant])} />
        </span>
    );
});

PulseDot.displayName = 'PulseDot';
