import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { Text } from '@components/atoms';

interface Props extends HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {
    variant?: 'default' | 'success' | 'warning' | 'error';
    className?: string;
}

const AlertTitle = forwardRef<HTMLParagraphElement, Props>(({ variant = 'default', className = '', ...props }, ref) => {
    const titleClasses = {
        default: 'text-title',
        success: 'text-green',
        warning: 'text-yellow',
        error: 'text-red',
    };

    return (
        <Text
            ref={ref}
            {...props}
            className={`relative font-semibold mb-0.5 last:mb-0 ${titleClasses[variant]} ${className}`}
        >
            {props.children}
        </Text>
    );
});

AlertTitle.displayName = 'AlertTitle';
export default AlertTitle;
