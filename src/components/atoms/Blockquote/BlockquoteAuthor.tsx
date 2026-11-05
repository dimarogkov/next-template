import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLElement>, RefAttributes<HTMLElement> {
    className?: string;
}

export const BlockquoteAuthor = forwardRef<HTMLElement, Props>(({ className = '', ...props }, ref) => {
    return <figcaption ref={ref} {...props} className={cn('relative w-full', className)} />;
});

BlockquoteAuthor.displayName = 'BlockquoteAuthor';
