import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';
import Link from 'next/link';

interface Props extends HTMLAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    className?: string;
}

const SimpleLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(({ href, className = '', ...props }, ref) => {
    return (
        <Link
            ref={ref}
            {...props}
            href={href}
            className={`relative w-auto font-medium text-blue underline ${className}`}
        />
    );
});

SimpleLink.displayName = 'SimpleLink';
export default SimpleLink;
