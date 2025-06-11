'use client';
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
                    `flex items-center justify-center gap-2 w-full sm:w-fit h-10 lg:h-11 font-media px-5 rounded outline-none transition-all duration-300 active:scale-95 ${className}`,
                    {
                        'bg-gray text-white pointer-events-none': props.disabled,
                        'bg-blue text-white hover:opacity-80': !props.disabled && btnType === EnumBtn.default,
                        'border-2 border-blue text-blue hover:opacity-80':
                            !props.disabled && btnType === EnumBtn.outline,
                        'text-black hover:bg-gray': !props.disabled && btnType === EnumBtn.ghost,
                    }
                )}
            />
        );
    }
);

Btn.displayName = 'Btn';
export default Btn;
