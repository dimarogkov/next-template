import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { Title } from '@components/atoms';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLHeadingElement>, RefAttributes<HTMLHeadingElement> {
    variant?: 'default' | 'success' | 'warning' | 'error';
    headingSize?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
}

export const AlertTitle = forwardRef<HTMLHeadingElement, Props>(
    ({ variant = 'default', headingSize = 'h6', className = '', ...props }, ref) => {
        const titleClasses = {
            default: 'text-title!',
            success: 'text-green!',
            warning: 'text-yellow!',
            error: 'text-red!'
        };

        return (
            <Title
                ref={ref}
                {...props}
                size={headingSize}
                className={cn('relative mb-0.5 font-medium! last:mb-0', titleClasses[variant], className)}
            >
                {props.children}
            </Title>
        );
    }
);

AlertTitle.displayName = 'AlertTitle';
