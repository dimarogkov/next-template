import { forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const BlockquoteAuthor = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return <div ref={ref} {...props} className={`relative w-full ${className}`} />;
});

BlockquoteAuthor.displayName = 'BlockquoteAuthor';
export default BlockquoteAuthor;
