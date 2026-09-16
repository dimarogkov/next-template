'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import cn from 'classnames';
import { Text } from '../Text';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdownLabel = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, className = '', setIsOpen, ...props }, ref) => {
        return (
            <div ref={ref} {...props} className={cn('relative px-2 py-1', className)}>
                <Text className="text-title!">{props.children}</Text>
            </div>
        );
    }
);

DropdownLabel.displayName = 'DropdownLabel';
