import { ReactNode, RefAttributes, forwardRef } from 'react';
import Link from 'next/link';

interface Props extends RefAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    target?: string;
    children: ReactNode;
    className?: string;
}

const BtnLink = forwardRef<HTMLAnchorElement, Props>(({ href, target, children, className = '', ...props }, ref) => {
    return (
        <Link
            ref={ref}
            href={href}
            target={target}
            {...props}
            className={`relative flex items-center justify-center gap-1.5 w-full h-full px-4 ${className}`}
        >
            {children}
        </Link>
    );
});

BtnLink.displayName = 'BtnLink';
export default BtnLink;
