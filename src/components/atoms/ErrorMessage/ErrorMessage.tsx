import { HTMLAttributes, RefAttributes, forwardRef } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {
    className?: string;
}

export const ErrorMessage = forwardRef<HTMLParagraphElement, Props>(({ className = '', ...props }, ref) => {
    return <p ref={ref} {...props} className={cn('text-red w-full text-sm font-medium', className)} />;
});

ErrorMessage.displayName = 'ErrorMessage';
