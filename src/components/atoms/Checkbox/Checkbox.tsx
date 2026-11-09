import { forwardRef, InputHTMLAttributes, RefAttributes } from 'react';
import { Text } from '@components/atoms/Text';
import { Check } from 'lucide-react';
import cn from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, Props>(({ label, className = '', ...props }, ref) => {
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
                    type="checkbox"
                    className="peer absolute top-0 left-0 h-full w-full cursor-pointer opacity-0"
                />

                <span className="border-border peer-checked:border-title peer-checked:bg-title pointer-events-none absolute inset-0 rounded-md border" />

                <Check className="text-bg pointer-events-none invisible absolute inset-0 m-auto size-4 opacity-0 peer-checked:visible peer-checked:opacity-100" />
            </div>

            {label && <Text as="span">{label}</Text>}
        </label>
    );
});

Checkbox.displayName = 'Checkbox';
