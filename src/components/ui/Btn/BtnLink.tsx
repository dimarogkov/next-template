import { FC, ReactNode, RefAttributes, forwardRef } from 'react';
import Link from 'next/link';

interface Props extends RefAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    target?: string;
    children: ReactNode;
    className?: string;
}

const BtnLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(
    ({ href, target, children, className = '', ...props }, ref) => {
        return (
            <Link
                ref={ref}
                href={href}
                target={target}
                {...props}
                className='flex items-center justify-center gap-1.5 w-full h-full px-4'
            >
                {children}
            </Link>
        );
    }
);

BtnLink.displayName = 'BtnLink';
export default BtnLink;
