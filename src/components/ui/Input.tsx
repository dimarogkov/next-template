import { InputHTMLAttributes, forwardRef } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormNames } from '@/src/types/enums/FormNames';
import { FormValues } from '@/src/types/interfaces/FormValues';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    registerName?: FormNames;
    register?: UseFormRegister<FormValues>;
}

const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>(
    ({ className = '', registerName = FormNames.username, register = () => {}, ...props }, ref) => (
        <input
            ref={ref}
            {...props}
            className={`w-full h-10 px-4 rounded border border-gray outline-none transition-all duration-300 focus:border-black ${className}`}
            {...register(registerName)}
        />
    )
);

Input.displayName = 'Input';
export default Input;
