import { ButtonHTMLAttributes, forwardRef } from 'react';
import { EnumBtn } from '@/src/types/enums/Btn';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    btnType?: string;
    className?: string;
}

const Btn: React.FC<Props> = forwardRef<HTMLButtonElement, Props>(
    ({ btnType = EnumBtn.default, className = '', ...props }, ref) => (
        <button
            ref={ref}
            {...props}
            className={cn(
                `flex items-center justify-center w-full sm:w-fit sm:min-w-32 lg:min-w-36 h-10 lg:h-11 font-media px-4 rounded text-white transition-opacity duration-300 hover:opacity-80 ${className}`,
                {
                    'pointer-events-none bg-gray': props.disabled,
                    'bg-blue': !props.disabled && btnType === EnumBtn.default,
                    'border-2 border-blue text-blue': !props.disabled && btnType === EnumBtn.outline,
                    'bg-black/25': !props.disabled && btnType === EnumBtn.gray,
                }
            )}
        />
    )
);

Btn.displayName = 'Btn';
export default Btn;
