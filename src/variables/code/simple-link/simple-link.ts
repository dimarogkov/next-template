export const SIMPLE_LINK_CODE = `import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { Link } from 'react-router-dom';

interface Props extends HTMLAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    target?: string;
    className?: string;
}

export const SimpleLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(
    ({ href, target, className = '', ...props }, ref) => {
        return (
            <Link
                ref={ref}
                {...props}
                to={href}
                target={target}
                className={\`relative w-auto font-medium text-title underline \${className}\`}
            />
        );
    }
);`;
