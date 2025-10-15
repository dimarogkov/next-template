'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const DropdownTrigger = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, className = '', setIsOpen = () => {}, ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                onClick={() => setIsOpen((prevState) => !prevState)}
                className={`relative cursor-pointer list-none ${className}`}
            />
        );
    }
);

DropdownTrigger.displayName = 'DropdownTrigger';
export default DropdownTrigger;
