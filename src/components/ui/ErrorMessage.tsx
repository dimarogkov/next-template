import { FC, HTMLAttributes, RefAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {
    className?: string;
}

const ErrorMessage: FC<Props> = forwardRef<HTMLParagraphElement, Props>(({ className = '', ...props }, ref) => {
    return <p ref={ref} {...props} className={`w-full font-medium text-sm text-red ${className}`} />;
});

ErrorMessage.displayName = 'ErrorMessage';
export default ErrorMessage;
