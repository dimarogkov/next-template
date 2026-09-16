import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

export const BlockquoteWrapper = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <div
            ref={ref}
            {...props}
            className={cn('border-border relative flex w-full flex-col gap-1.5 border-l-4 pl-3 md:pl-4', className)}
        />
    );
});

BlockquoteWrapper.displayName = 'BlockquoteWrapper';
