import { FC, InputHTMLAttributes, RefAttributes, forwardRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    className?: string;
}

const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <input
            ref={ref}
            {...props}
            className={`w-full h-10 px-4 rounded-md text-title border border-border bg-transparent outline-none transition-all duration-300 focus:border-text placeholder:text-text ${className}`}
        />
    );
});

Input.displayName = 'Input';
export default Input;
