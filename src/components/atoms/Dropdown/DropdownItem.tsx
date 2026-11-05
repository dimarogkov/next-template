'use client';
import { Dispatch, forwardRef, HTMLAttributes, KeyboardEvent, RefAttributes, SetStateAction } from 'react';
import { Text } from '@components/atoms/Text';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    triggerElement?: HTMLElement | null;
    isOpen?: boolean;
    subTriggerElement?: HTMLElement | null;
    isSubOpen?: boolean;
    disabled?: boolean;
    className?: string;
    setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSubTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
    setIsSubOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdownItem = forwardRef<HTMLDivElement, Props>(
    (
        {
            triggerElement,
            isOpen,
            subTriggerElement,
            isSubOpen,
            disabled = false,
            className = '',
            setTriggerElement,
            setIsOpen,
            setSubTriggerElement,
            setIsSubOpen,
            ...props
        },
        ref
    ) => {
        const closeDropdown = () => {
            if (disabled) return;
            setIsOpen?.(false);
            setIsSubOpen?.(false);
        };

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
                tabIndex={disabled ? -1 : 0}
                aria-disabled={disabled || undefined}
                onClick={closeDropdown}
                onKeyDown={onKeyDown}
                className={cn(
                    'hover:bg-border relative cursor-pointer rounded-md px-2 py-1 transition-colors duration-300',
                    className,
                    {
                        'pointer-events-none opacity-60': disabled
                    }
                )}
            >
                <Text className="text-title!">{props.children}</Text>
            </div>
        );
    }
);

DropdownItem.displayName = 'DropdownItem';
