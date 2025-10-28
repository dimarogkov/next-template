'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { Text } from '../Text';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const DropdownItem = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, className = '', setIsOpen = () => {}, ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                onClick={() => setIsOpen(false)}
                className={`relative cursor-pointer rounded-md px-2 py-1 transition-colors duration-300 hover:bg-border ${className}`}
            >
                <Text className='!text-title'>{props.children}</Text>
            </div>
        );
    }
);

DropdownItem.displayName = 'DropdownItem';
export default DropdownItem;
