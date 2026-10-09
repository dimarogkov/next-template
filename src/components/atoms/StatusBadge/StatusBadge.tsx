import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLSpanElement>, RefAttributes<HTMLSpanElement> {
    variant: 'new' | 'updated';
    className?: string;
}

export const StatusBadge = forwardRef<HTMLSpanElement, Props>(({ variant, className = '', ...props }, ref) => {
    const label = {
        new: 'New',
        updated: 'Updated'
    };

    const variantColor = {
        new: 'text-green border-green bg-green/20',
        updated: 'text-blue border-blue bg-blue/20'
    };

    return (
        <span
            ref={ref}
            {...props}
            className={cn(
                'code flex h-5.5 items-center rounded-sm border px-1.5 text-[13px] font-medium',
                variantColor[variant],
                className
            )}
        >
            {label[variant]}
        </span>
    );
});

StatusBadge.displayName = 'StatusBadge';
