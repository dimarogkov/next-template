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
        <label
            className={cn('flex cursor-pointer items-center gap-2 select-none', className, {
                'pointer-events-none opacity-60': props.disabled
            })}
        >
            <div className="relative size-5 min-w-5">
                <input
                    ref={ref}
                    {...props}
                    type="radio"
                    className="peer absolute top-0 left-0 h-full w-full cursor-pointer opacity-0"
                />

                <span className="peer-checked:border-title border-border pointer-events-none absolute inset-0 rounded-full border bg-transparent" />

                <Circle className="bg-title text-title pointer-events-none invisible absolute inset-0 m-auto size-3 rounded-full opacity-0 peer-checked:visible peer-checked:opacity-100" />
            </div>

            {label && <Text as="span">{label}</Text>}
        </label>
    );
});

Radio.displayName = 'Radio';
