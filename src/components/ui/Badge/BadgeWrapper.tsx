import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const BadgeWrapper: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => (
    <div ref={ref} {...props} className={`relative flex gap-2 ${className}`} />
));

BadgeWrapper.displayName = 'BadgeWrapper';
export default BadgeWrapper;
