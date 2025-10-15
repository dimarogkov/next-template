import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { Text } from '@components/atoms';

interface Props extends HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {
    variant?: 'default' | 'success' | 'warning' | 'error';
    className?: string;
}

const AlertDescription = forwardRef<HTMLParagraphElement, Props>(
    ({ variant = 'default', className = '', ...props }, ref) => {
        const descriptionClasses = {
            default: 'text-text/80',
            success: 'text-green/80',
            warning: 'text-yellow/80',
            error: 'text-red/80',
        };

        return (
            <Text ref={ref} {...props} className={`relative !text-sm ${descriptionClasses[variant]} ${className}`}>
                {props.children}
            </Text>
        );
    }
);

AlertDescription.displayName = 'AlertDescription';
export default AlertDescription;
