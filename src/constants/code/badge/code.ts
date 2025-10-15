export const BADGE_CODE = `import { forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement>, RefAttributes<HTMLSpanElement> {
    type?: 'default' | 'secondary' | 'outline';
    className?: string;
}

const Badge = forwardRef<HTMLSpanElement, Props>(({ type = 'default', className = '', ...props }, ref) => {
    const badgeType = {
        default: 'border-border bg-border',
        secondary: 'border-white bg-white text-bg',
        outline: 'border-border bg-transparent',
    };

    return (
        <span
            ref={ref}
            {...props}
            className={\`flex items-center gap-1.5 w-fit text-base px-3 py-1.5 rounded-md border \${badgeType[type]} \${className}\`}
        />
    );
});

Badge.displayName = 'Badge';
export default Badge;`;
