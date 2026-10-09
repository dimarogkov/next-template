import { HTMLAttributes, RefAttributes, forwardRef } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {
    size?: 'default' | 'large' | 'small';
    className?: string;
}

export const Text = forwardRef<HTMLParagraphElement, Props>(({ size = 'default', className = '', ...props }, ref) => {
    return (
        <p
            ref={ref}
            {...props}
            className={cn(
                'w-full',
                {
                    'text-base': size === 'default' || size === 'large',
                    'md:text-lg': size === 'large',
                    'text-sm': size === 'small'
                },
                className
            )}
        />
    );
});

Text.displayName = 'Text';
