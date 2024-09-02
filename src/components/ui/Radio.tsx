import { forwardRef, InputHTMLAttributes, RefAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { EnumFormNames } from '@/src/types/enums';
import { IFormValues } from '@/src/types/interfaces/FormValues';
import { Circle } from 'lucide-react';
import cn from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    isChecked: string;
    value?: string;
    registerName?: EnumFormNames;
    register?: UseFormRegister<IFormValues>;
}

const Radio: React.FC<Props> = forwardRef<HTMLInputElement, Props>(
    ({ isChecked, value = '', registerName = EnumFormNames.radioType, register = () => {}, ...props }, ref) => (
        <div className='relative w-5 min-w-5 h-5'>
            <input
                ref={ref}
                {...props}
                type='radio'
                className='absolute top-5 left-0 w-full h-full opacity-0 cursor-pointer'
                {...register(registerName)}
                value={value}
            />

            <span
                className={cn('flex items-center justify-center w-full h-full rounded-full border', {
                    'border-gray': isChecked !== value,
                    'border-blue': isChecked === value,
                })}
            >
                <Circle
                    className={cn('w-3 h-3 rounded-full text-blue bg-blue', {
                        'opacity-0 invisible': isChecked !== value,
                        'opacity-1 visible': isChecked === value,
                    })}
                />
            </span>
        </div>
    )
);

Radio.displayName = 'Radio';
export default Radio;
