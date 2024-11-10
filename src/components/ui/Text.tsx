import { FC, HTMLAttributes, RefAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {
    className?: string;
}

const Text: FC<Props> = forwardRef<HTMLParagraphElement, Props>(({ className = '', ...props }, ref) => (
    <p ref={ref} {...props} className={`w-full text-base ${className}`} />
));

Text.displayName = 'Text';
export default Text;
