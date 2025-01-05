import { ButtonHTMLAttributes, FC, forwardRef, RefAttributes } from 'react';
import { EnumBtn } from '@/src/types/enums';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    btnType?: EnumBtn;
    className?: string;
}

const Btn: FC<Props> = forwardRef<HTMLButtonElement, Props>(
    ({ className = '', btnType = EnumBtn.default, ...props }, ref) => {
        return (
            <button
                ref={ref}
                {...props}
                className={cn(
                    `flex items-center justify-center gap-2 w-full sm:w-fit sm:min-w-32 lg:min-w-36 h-10 lg:h-11 font-media px-4 rounded transition-opacity duration-300 hover:opacity-80 ${className}`,
                    {
                        'bg-gray text-white pointer-events-none': props.disabled,
                        'bg-blue text-white': !props.disabled && btnType === EnumBtn.default,
                        'border-2 border-blue text-blue': !props.disabled && btnType === EnumBtn.outline,
                        'bg-black/25 text-white': !props.disabled && btnType === EnumBtn.disabled,
                    }
                )}
            />
        );
    }
);

Btn.displayName = 'Btn';
export default Btn;
