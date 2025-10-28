'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { Text } from '../Text';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const DropdownLabel = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, className = '', setIsOpen = () => {}, ...props }, ref) => {
        return (
            <div ref={ref} {...props} className={`relative px-2 py-1 ${className}`}>
                <Text className='!text-title'>{props.children}</Text>
            </div>
        );
    }
);

DropdownLabel.displayName = 'DropdownLabel';
export default DropdownLabel;
