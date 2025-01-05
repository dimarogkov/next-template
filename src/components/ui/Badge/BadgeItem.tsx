import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement>, RefAttributes<HTMLSpanElement> {
    className?: string;
}

const BadgeItem: FC<Props> = forwardRef<HTMLSpanElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <span
            ref={ref}
            {...props}
            className={`flex items-center gap-2 text-base px-3 py-1.5 rounded bg-gray ${className}`}
        />
    );
});

BadgeItem.displayName = 'BadgeItem';
export default BadgeItem;
