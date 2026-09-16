export const SWITCH_CODE = `'use client';
import { ButtonHTMLAttributes, forwardRef, RefAttributes, useState } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
  isActive?: boolean;
  className?: string;
}

export const Switch = forwardRef<HTMLButtonElement, Props>(
  ({ isActive: isSwitchActive = false, className = '', ...props }, ref) => {
    const [isActive, setIsActive] = useState(isSwitchActive);

    const toggleSwitch = () => setIsActive((prevState) => !prevState);

    return (
      <button
        ref={ref}
        {...props}
        type="button"
        onClick={toggleSwitch}
        className={cn(
          'relative flex h-6.5 w-12 cursor-pointer rounded-full border p-0.5 outline-hidden transition-colors duration-300',
          className,
          {
            'pointer-events-none opacity-60': props.disabled,
            'border-text justify-start': !isActive,
            'border-title justify-end': isActive
          }
        )}
      >
        <motion.span
          layout
          transition={{ type: 'spring', visualDuration: 0.3, bounce: 0.2 }}
          className={cn('relative size-5 rounded-full transition-colors duration-300', {
            'bg-title': isActive,
            'bg-text': !isActive
          })}
        />
      </button>
    );
  }
);

Switch.displayName = 'Switch';`;
