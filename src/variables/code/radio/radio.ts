export const RADIO_CODE = `import { FC, forwardRef, InputHTMLAttributes, RefAttributes } from 'react';
import { Text } from './Text';
import { Circle } from 'lucide-react';
import cn from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
}

export const Radio: FC<Props> = forwardRef<HTMLInputElement, Props>(({ label, className = '', ...props }, ref) => {
    return (
        <div
            className={cn(\`flex items-center gap-2 cursor-pointer select-none \${className}\`, {
                'opacity-70 pointer-events-none': props.disabled,
            })}
        >
            <div className='relative size-5 min-w-5'>
                <input
                    ref={ref}
                    {...props}
                    type='radio'
                    className='absolute top-5 left-0 w-full h-full opacity-0 cursor-pointer'
                />

                <span
                    className={cn('flex items-center justify-center w-full h-full bg-transparent rounded-full border', {
                        'border-border': !props.checked,
                        'border-title': props.checked,
                    })}
                >
                    <Circle
                        className={cn('size-3 rounded-full text-title bg-title', {
                            'opacity-0 invisible': !props.checked,
                            'opacity-1 visible': props.checked,
                        })}
                    />
                </span>
            </div>

            {label && <Text>{label}</Text>}
        </div>
    );
});`;
