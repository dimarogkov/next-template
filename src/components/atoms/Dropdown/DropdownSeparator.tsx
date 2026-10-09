'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { Separator } from '../Separator';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdownSeparator = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, className = '', setIsOpen, ...props }, ref) => {
        return <Separator ref={ref} {...props} className={cn('-mx-1 w-auto!', className)} />;
    }
);

DropdownSeparator.displayName = 'DropdownSeparator';
