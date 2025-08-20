import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const CardWrapper: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <div
            ref={ref}
            {...props}
            className={`relative w-full rounded-md border border-border bg-border overflow-hidden ${className}`}
        />
    );
});

CardWrapper.displayName = 'CardWrapper';
export default CardWrapper;
