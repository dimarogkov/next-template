import { BlockquoteHTMLAttributes, forwardRef, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends BlockquoteHTMLAttributes<HTMLQuoteElement>, RefAttributes<HTMLQuoteElement> {
    className?: string;
}

export const BlockquoteContent = forwardRef<HTMLQuoteElement, Props>(({ className = '', ...props }, ref) => {
    return <blockquote ref={ref} {...props} className={cn('relative w-full', className)} />;
});

BlockquoteContent.displayName = 'BlockquoteContent';
