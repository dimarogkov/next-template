import { ReactNode, RefAttributes, forwardRef } from 'react';
import Link from 'next/link';
import cn from 'classnames';

interface Props extends RefAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    target?: string;
    children: ReactNode;
    className?: string;
}

export const BtnLink = forwardRef<HTMLAnchorElement, Props>(
    ({ href, target, children, className = '', ...props }, ref) => {
        return (
            <Link
                ref={ref}
                href={href}
                target={target}
                {...props}
                className={cn('flex h-full w-full items-center justify-center gap-1.5 px-4', className)}
            >
                {children}
            </Link>
        );
    }
);

BtnLink.displayName = 'BtnLink';
