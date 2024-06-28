import { InputHTMLAttributes, forwardRef } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../types/interfaces/FormValues';
import { FormNames } from '../../types/enums/FormNames';

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
            className={`w-full h-10 px-4 rounded border-2 border-slate-300 outline-none transition-all duration-300 focus:border-black ${className}`}
            {...register(registerName)}
        />
    )
);

Input.displayName = 'Input';
export default Input;
