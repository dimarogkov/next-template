import { InputHTMLAttributes, RefAttributes, forwardRef } from 'react';
import cn from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    className?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <input
            ref={ref}
            {...props}
            className={cn(
                'border-border text-title placeholder:text-text focus:border-text h-10 w-full rounded-md border bg-transparent px-4 outline-hidden transition-all duration-300',
                className
            )}
        />
    );
});

Input.displayName = 'Input';
