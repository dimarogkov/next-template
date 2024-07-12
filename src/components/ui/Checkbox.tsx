import { forwardRef, InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormNames } from '@/src/types/enums/FormNames';
import { FormValues } from '@/src/types/interfaces/FormValues';
import { LuCheck } from 'react-icons/lu';
import cn from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    isChecked: boolean;
    className?: string;
    registerName?: FormNames;
    register?: UseFormRegister<FormValues>;
}

const Checkbox: React.FC<Props> = forwardRef<HTMLInputElement, Props>(
    ({ isChecked, className = '', registerName = FormNames.rememberMe, register = () => {}, ...props }, ref) => {
        return (
            <div className={`relative w-5 min-w-5 h-5 ${className}`}>
                <input
                    ref={ref}
                    {...props}
                    type='checkbox'
                    className='absolute top-0 left-0 w-full h-full opacity-0'
                    {...register(registerName)}
                />

                <span
                    className={cn('flex items-center justify-center w-full h-full rounded border', {
                        'border-gray': !isChecked,
                        'border-blue bg-blue': isChecked,
                    })}
                >
                    <LuCheck
                        className={cn('w-4 h-4 text-white', {
                            'opacity-0 invisible': !isChecked,
                            'opacity-1 visible': isChecked,
                        })}
                    />
                </span>
            </div>
        );
    }
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
