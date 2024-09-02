import { InputHTMLAttributes, RefAttributes, forwardRef } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { EnumFormNames } from '@/src/types/enums';
import { IFormValues } from '@/src/types/interfaces/FormValues';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    className?: string;
    registerName?: EnumFormNames;
    register?: UseFormRegister<IFormValues>;
}

const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>(
    ({ className = '', registerName = EnumFormNames.username, register = () => {}, ...props }, ref) => (
        <input
            ref={ref}
            {...props}
            className={`w-full h-10 px-4 rounded border border-gray bg-white outline-none transition-all duration-300 focus:border-black ${className}`}
            {...register(registerName)}
        />
    )
);

Input.displayName = 'Input';
export default Input;
