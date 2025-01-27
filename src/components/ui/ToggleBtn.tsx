'use client';
import { ButtonHTMLAttributes, FC, forwardRef, RefAttributes, useEffect, useState } from 'react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    isActive?: boolean;
    className?: string;
}

const ToggleBtn: FC<Props> = forwardRef<HTMLButtonElement, Props>(
    ({ isActive: isToggleBtnActive = false, className = '', ...props }, ref) => {
        const [isActive, setIsActive] = useState(false);

        useEffect(() => {
            setIsActive(isToggleBtnActive);
        }, [isToggleBtnActive]);

        return (
            <button
                ref={ref}
                {...props}
                type='button'
                onClick={() => setIsActive((isActive) => !isActive)}
                className={cn(
                    `relative w-12 h-[26px] rounded-full p-0.5 border transition-colors duration-300 ${className}`,
                    {
                        'border-gray': !isActive,
                        'border-blue': isActive,
                    }
                )}
            >
                <span
                    className={cn('relative block size-5 rounded-full transition-all duration-300', {
                        'translate-x-[calc(100%+2px)] bg-blue': isActive,
                        'translate-x-0 bg-gray': !isActive,
                    })}
                />
            </button>
        );
    }
);

ToggleBtn.displayName = 'ToggleBtn';
export default ToggleBtn;
