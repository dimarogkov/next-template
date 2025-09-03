export const SIMPLE_LINK_CODE = `import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';
import Link from 'next/link';

interface Props extends HTMLAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    target?: string;
    className?: string;
}

const SimpleLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(
    ({ href, target, className = '', ...props }, ref) => {
        return (
            <Link
                ref={ref}
                {...props}
                href={href}
                target={target}
                className={\`relative w-auto font-medium text-title underline transition-opacity duration-300 hover:opacity-75 \${className}\`}
            />
        );
    }
);

SimpleLink.displayName = 'SimpleLink';
export default SimpleLink;`;
