'use client';
import { Dispatch, forwardRef, HTMLAttributes, KeyboardEvent, RefAttributes, SetStateAction } from 'react';
import cn from 'classnames';
import { Text } from '../Text';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdownItem = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, className = '', setIsOpen = () => {}, ...props }, ref) => {
        const closeDropdown = () => setIsOpen(false);

        const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                closeDropdown();
            }
        };

        return (
            <div
                ref={ref}
                {...props}
                role="menuitem"
                tabIndex={0}
                onClick={closeDropdown}
                onKeyDown={onKeyDown}
                className={cn(
                    'hover:bg-border relative cursor-pointer rounded-md px-2 py-1 transition-colors duration-300',
                    className
                )}
            >
                <Text className="text-title!">{props.children}</Text>
            </div>
        );
    }
);

DropdownItem.displayName = 'DropdownItem';
