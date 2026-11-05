import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
    decorative?: boolean;
    className?: string;
}

export const Separator = forwardRef<HTMLDivElement, Props>(
    ({ orientation = 'horizontal', decorative = true, className = '', ...props }, ref) => {
        const isVertical = orientation === 'vertical';

        return (
            <div
                ref={ref}
                {...props}
                role={decorative ? 'none' : 'separator'}
                aria-orientation={!decorative && isVertical ? 'vertical' : undefined}
                className={cn('border-border relative', isVertical ? 'h-full border-l' : 'w-full border-t', className)}
            />
        );
    }
);

Separator.displayName = 'Separator';
