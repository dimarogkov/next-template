'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { Separator } from '../Separator';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const DropdownSeparator = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, className = '', setIsOpen = () => {}, ...props }, ref) => {
        return <Separator ref={ref} {...props} className={`!w-auto -mx-1 ${className}`} />;
    }
);

DropdownSeparator.displayName = 'DropdownSeparator';
export default DropdownSeparator;
