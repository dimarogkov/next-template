import { FC, forwardRef, InputHTMLAttributes, RefAttributes } from 'react';
import { Check } from 'lucide-react';
import cn from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    isChecked: boolean;
}

const Checkbox: FC<Props> = forwardRef<HTMLInputElement, Props>(({ isChecked, ...props }, ref) => {
    return (
        <div className='relative w-5 min-w-5 h-5'>
            <input
                ref={ref}
                {...props}
                type='checkbox'
                className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
            />

            <span
                className={cn('flex items-center justify-center w-full h-full bg-transparent rounded border', {
                    'border-gray': !isChecked,
                    'border-blue bg-blue': isChecked,
                })}
            >
                <Check
                    className={cn('w-4 h-4 text-blue', {
                        'opacity-0 invisible': !isChecked,
                        'opacity-1 visible': isChecked,
                    })}
                />
            </span>
        </div>
    );
});

Checkbox.displayName = 'Checkbox';
export default Checkbox;
