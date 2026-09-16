'use client';
import { Dispatch, forwardRef, HTMLAttributes, KeyboardEvent, RefAttributes, SetStateAction } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdownTrigger = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, className = '', setIsOpen = () => {}, ...props }, ref) => {
        const toggleOpen = () => setIsOpen((prevState) => !prevState);

        const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleOpen();
            }
        };

        return (
            <div
                ref={ref}
                {...props}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onClick={toggleOpen}
                onKeyDown={onKeyDown}
                className={cn('relative cursor-pointer list-none', className)}
            />
        );
    }
);

DropdownTrigger.displayName = 'DropdownTrigger';
