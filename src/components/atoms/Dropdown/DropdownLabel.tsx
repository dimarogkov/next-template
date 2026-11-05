'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { Text } from '@components/atoms/Text';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    triggerElement?: HTMLElement | null;
    isOpen?: boolean;
    subTriggerElement?: HTMLElement | null;
    isSubOpen?: boolean;
    className?: string;
    setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSubTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
    setIsSubOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdownLabel = forwardRef<HTMLDivElement, Props>(
    (
        {
            triggerElement,
            isOpen,
            subTriggerElement,
            isSubOpen,
            className = '',
            setTriggerElement,
            setIsOpen,
            setSubTriggerElement,
            setIsSubOpen,
            ...props
        },
        ref
    ) => {
        return (
            <div ref={ref} {...props} className={cn('relative px-2 py-1', className)}>
                <Text className="text-title!">{props.children}</Text>
            </div>
        );
    }
);

DropdownLabel.displayName = 'DropdownLabel';
