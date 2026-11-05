'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { Separator } from '@components/atoms/Separator';
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

export const DropdownSeparator = forwardRef<HTMLDivElement, Props>(
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
        return <Separator ref={ref} {...props} decorative={false} className={cn('-mx-1 w-auto!', className)} />;
    }
);

DropdownSeparator.displayName = 'DropdownSeparator';
