import { HTMLAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLParagraphElement> {
    className?: string;
}

const ErrorMessage: React.FC<Props> = forwardRef<HTMLParagraphElement, Props>(({ className = '', ...props }, ref) => (
    <p ref={ref} {...props} className={`w-full font-medium text-sm text-rose-600 ${className}`} />
));

ErrorMessage.displayName = 'ErrorMessage';
export default ErrorMessage;
