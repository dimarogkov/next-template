import { forwardRef, InputHTMLAttributes, RefAttributes } from 'react';
import { Text } from '@components/atoms';
import { Check } from 'lucide-react';
import cn from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
}

const Checkbox = forwardRef<HTMLInputElement, Props>(({ label, className = '', ...props }, ref) => {
    return (
        <div
            className={cn(`flex items-center gap-2 cursor-pointer select-none ${className}`, {
                'opacity-70 pointer-events-none': props.disabled,
            })}
        >
            <div className='relative size-5 min-w-5'>
                <input
                    ref={ref}
                    {...props}
                    type='checkbox'
                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                />

                <span
                    className={cn('flex items-center justify-center w-full h-full rounded-md border', {
                        'border-border bg-transparent': !props.checked,
                        'border-title bg-title': props.checked,
                    })}
                >
                    <Check
                        className={cn('size-4 text-bg', {
                            'opacity-0 invisible': !props.checked,
                            'opacity-1 visible': props.checked,
                        })}
                    />
                </span>
            </div>

            {label && <Text>{label}</Text>}
        </div>
    );
});

Checkbox.displayName = 'Checkbox';
export default Checkbox;
