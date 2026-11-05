'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { assignRefs } from '@utils';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    triggerElement?: HTMLElement | null;
    isOpen?: boolean;
    className?: string;
    setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdownTrigger = forwardRef<HTMLDivElement, Props>(
    ({ triggerElement, isOpen, className = '', setTriggerElement, setIsOpen, ...props }, ref) => {
        const setRefs = assignRefs<HTMLDivElement>(ref, setTriggerElement);

        const toggleOpen = () => setIsOpen?.((prevState) => !prevState);

        return (
            <div
                ref={setRefs}
                {...props}
                aria-haspopup="menu"
                aria-expanded={isOpen}
                onClick={toggleOpen}
                className={cn('relative cursor-pointer', className)}
            />
        );
    }
);

DropdownTrigger.displayName = 'DropdownTrigger';
