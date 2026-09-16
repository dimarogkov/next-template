import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { Text } from '@components/atoms';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {
    variant?: 'default' | 'success' | 'warning' | 'error';
    className?: string;
}

export const AlertTitle = forwardRef<HTMLParagraphElement, Props>(
    ({ variant = 'default', className = '', ...props }, ref) => {
        const titleClasses = {
            default: 'text-title',
            success: 'text-green',
            warning: 'text-yellow',
            error: 'text-red'
        };

        return (
            <Text
                ref={ref}
                {...props}
                className={cn('relative mb-0.5 font-semibold last:mb-0', titleClasses[variant], className)}
            >
                {props.children}
            </Text>
        );
    }
);

AlertTitle.displayName = 'AlertTitle';
