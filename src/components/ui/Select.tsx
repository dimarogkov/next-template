import { forwardRef, SelectHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { EnumFormNames } from '@/src/types/enums/FormNames';
import { IFormValues } from '@/src/types/interfaces/FormValues';
import { ChevronDown } from 'lucide-react';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    className?: string;
    registerName?: EnumFormNames;
    register?: UseFormRegister<IFormValues>;
}

const Select: React.FC<Props> = forwardRef<HTMLSelectElement, Props>(
    ({ className = '', registerName = EnumFormNames.select, register = () => {}, ...props }, ref) => (
        <div className={`relative flex items-center w-full h-10 ${className}`}>
            <select
                ref={ref}
                {...props}
                className='w-full h-full px-4 pr-12 rounded outline-none appearance-none border border-gray transition-all duration-300 focus:border-black'
                {...register(registerName)}
            />

            <ChevronDown className='absolute right-4 w-5 h-5 text-black' />
        </div>
    )
);

Select.displayName = 'Select';
export default Select;
