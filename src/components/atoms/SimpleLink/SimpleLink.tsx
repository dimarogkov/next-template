import { forwardRef, HTMLAttributeAnchorTarget, HTMLAttributes, RefAttributes } from 'react';
import Link from 'next/link';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    target?: HTMLAttributeAnchorTarget;
    className?: string;
}

export const SimpleLink = forwardRef<HTMLAnchorElement, Props>(
    ({ href, target, rel, className = '', children, ...props }, ref) => {
        return (
            <Link
                ref={ref}
                {...props}
                href={href}
                target={target}
                rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
                className={cn(
                    'text-title relative w-auto font-medium underline transition-opacity duration-300 hover:opacity-75',
                    className
                )}
            >
                {children}
                {target === '_blank' && <span className="sr-only">Opens in a new tab</span>}
            </Link>
        );
    }
);

SimpleLink.displayName = 'SimpleLink';
