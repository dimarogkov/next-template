import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { Text } from '@components/atoms';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {
    variant?: 'default' | 'success' | 'warning' | 'error';
    className?: string;
}

export const AlertDescription = forwardRef<HTMLParagraphElement, Props>(
    ({ variant = 'default', className = '', ...props }, ref) => {
        const descriptionClasses = {
            default: 'text-text/80',
            success: 'text-green/80',
            warning: 'text-yellow/80',
            error: 'text-red/80'
        };

        return (
            <Text ref={ref} {...props} className={cn('relative text-sm!', descriptionClasses[variant], className)}>
                {props.children}
            </Text>
        );
    }
);

AlertDescription.displayName = 'AlertDescription';
