import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../types/interfaces/FormValues';
import { FormNames } from '../../types/enums/FormNames';

type Props = {
    type?: string;
    placeholder?: string;
    className?: string;
    checked?: boolean;
    autoFocus?: boolean;
    registerName?: FormNames;
    register?: UseFormRegister<FormValues>;
};

const Input: React.FC<Props> = ({
    type = 'text',
    placeholder = '',
    className = '',
    checked = false,
    autoFocus = false,
    registerName = FormNames.username,
    register = () => {},
}) => {
    return (
        <input
            type={type}
            checked={checked}
            placeholder={placeholder}
            autoFocus={autoFocus}
            className={`w-full h-[40px] px-[16px] rounded-[4px] border-2 border-slate-300 outline-none transition-all duration-300 focus:border-black ${className}`}
            {...register(registerName)}
        />
    );
};

export default Input;
