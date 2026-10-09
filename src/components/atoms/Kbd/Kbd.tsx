import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLElement>, RefAttributes<HTMLElement> {
    className?: string;
}

export const Kbd = forwardRef<HTMLElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <kbd
            ref={ref}
            {...props}
            className={cn(
                'code border-border bg-border/40 text-title flex h-6 min-w-6 items-center justify-center rounded-sm border px-1 text-sm',
                className
            )}
        />
    );
});

Kbd.displayName = 'Kbd';
