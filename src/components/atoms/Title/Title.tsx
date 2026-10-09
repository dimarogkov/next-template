import { ElementType, HTMLAttributes, ReactNode, RefAttributes, forwardRef } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLHeadingElement>, RefAttributes<HTMLHeadingElement> {
    children?: ReactNode;
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
}

export const Title = forwardRef<HTMLHeadingElement, Props>(
    ({ children, size = 'h1', className = '', ...props }, ref) => {
        const titleSize = {
            h1: '!leading-tight text-4xl md:text-5xl',
            h2: '!leading-tight text-3xl md:text-4xl',
            h3: '!leading-tight text-2xl md:text-3xl',
            h4: '!leading-tight text-xl md:text-2xl',
            h5: '!leading-tight text-lg md:text-xl',
            h6: '!leading-tight text-lg'
        };

        const Heading = size as ElementType;

        return (
            <Heading ref={ref} {...props} className={cn('text-title relative font-bold', titleSize[size], className)}>
                {children}
            </Heading>
        );
    }
);

Title.displayName = 'Title';
