'use client';
import { ButtonHTMLAttributes, FC, forwardRef, RefAttributes, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    isActive?: boolean;
    className?: string;
}

const SwitchBtn: FC<Props> = forwardRef<HTMLButtonElement, Props>(
    ({ isActive: isToggleBtnActive = false, className = '', ...props }, ref) => {
        const [isActive, setIsActive] = useState(false);

        useEffect(() => {
            setIsActive(isToggleBtnActive);
        }, [isToggleBtnActive]);

        const toggleSwitchBtn = () => setIsActive((prevState) => !prevState);

        return (
            <button
                ref={ref}
                {...props}
                type='button'
                onClick={toggleSwitchBtn}
                className={cn(
                    `relative flex w-12 h-[26px] rounded-full p-0.5 border transition-colors duration-300 ${className}`,
                    {
                        'justify-start border-gray': !isActive,
                        'justify-end border-blue': isActive,
                    }
                )}
            >
                <motion.span
                    layout
                    transition={{ type: 'spring', visualDuration: 0.3, bounce: 0.2 }}
                    className={cn('relative block size-5 rounded-full transition-colors duration-300', {
                        'bg-blue': isActive,
                        'bg-gray': !isActive,
                    })}
                />
            </button>
        );
    }
);

SwitchBtn.displayName = 'SwitchBtn';
export default SwitchBtn;
