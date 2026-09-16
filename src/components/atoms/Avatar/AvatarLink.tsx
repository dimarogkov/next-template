'use client';
import {
    AnchorHTMLAttributes,
    Children,
    cloneElement,
    forwardRef,
    isValidElement,
    ReactElement,
    ReactNode,
    RefAttributes
} from 'react';
import Link from 'next/link';
import cn from 'classnames';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    type?: 'circle' | 'square';
    className?: string;
    children?: ReactNode;
}

export const AvatarLink = forwardRef<HTMLAnchorElement, Props>(
    ({ href, type = 'circle', children, className = '', ...props }, ref) => {
        const isTypeCircle = type === 'circle';
        const isTypeSquare = type === 'square';

        return (
            <Link
                ref={ref}
                {...props}
                href={href}
                className={cn('relative block h-full w-full overflow-hidden', className, {
                    'rounded-full': isTypeCircle,
                    'rounded-md': isTypeSquare
                })}
            >
                {Children.map(children, (child) => {
                    return isValidElement(child) ? cloneElement(child as ReactElement<any>, { type }) : child;
                })}
            </Link>
        );
    }
);

AvatarLink.displayName = 'AvatarLink';
