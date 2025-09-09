import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const BlockquoteWrapper: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <div
            ref={ref}
            {...props}
            className={`relative flex flex-col gap-1.5 w-full pl-3 md:pl-4 border-l-4 border-border ${className}`}
        />
    );
});

BlockquoteWrapper.displayName = 'BlockquoteWrapper';
export default BlockquoteWrapper;
