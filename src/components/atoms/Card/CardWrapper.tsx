import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

export const CardWrapper = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <div
            ref={ref}
            {...props}
            className={cn('border-border bg-border relative w-full overflow-hidden rounded-md border', className)}
        />
    );
});

CardWrapper.displayName = 'CardWrapper';
