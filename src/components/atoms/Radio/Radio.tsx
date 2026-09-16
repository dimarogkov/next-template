import { forwardRef, InputHTMLAttributes, RefAttributes } from 'react';
import { Text } from '@components/atoms';
import { Circle } from 'lucide-react';
import cn from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
}

export const Radio = forwardRef<HTMLInputElement, Props>(({ label, className = '', ...props }, ref) => {
    return (
        <div
            className={cn('flex cursor-pointer items-center gap-2 select-none', className, {
                'pointer-events-none opacity-70': props.disabled
            })}
        >
            <div className="relative size-5 min-w-5">
                <input
                    ref={ref}
                    {...props}
                    type="radio"
                    className="absolute top-5 left-0 h-full w-full cursor-pointer opacity-0"
                />

                <span
                    className={cn('flex h-full w-full items-center justify-center rounded-full border bg-transparent', {
                        'border-border': !props.checked,
                        'border-title': props.checked
                    })}
                >
                    <Circle
                        className={cn('bg-title text-title size-3 rounded-full', {
                            'invisible opacity-0': !props.checked,
                            'visible opacity-100': props.checked
                        })}
                    />
                </span>
            </div>

            {label && <Text>{label}</Text>}
        </div>
    );
});

Radio.displayName = 'Radio';
