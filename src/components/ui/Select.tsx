import { forwardRef, SelectHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormNames } from '@/src/types/enums/FormNames';
import { FormValues } from '@/src/types/interfaces/FormValues';
import { LuChevronDown } from 'react-icons/lu';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    className?: string;
    registerName?: FormNames;
    register?: UseFormRegister<FormValues>;
}

const Select: React.FC<SelectProps> = forwardRef<HTMLSelectElement, SelectProps>(
    ({ className = '', registerName = FormNames.select, register = () => {}, ...props }, ref) => (
        <div className={`relative flex items-center w-full h-10 ${className}`}>
            <select
                ref={ref}
                {...props}
                className='w-full h-full px-4 pr-12 rounded outline-none appearance-none border border-gray transition-all duration-300 focus:border-black'
                {...register(registerName)}
            />

            <LuChevronDown className='absolute right-4 w-5 h-5 text-black' />
        </div>
    )
);

Select.displayName = 'Select';
export default Select;
