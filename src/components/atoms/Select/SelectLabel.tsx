'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { ISelectItem } from '@interfaces/SelectItem';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    isMultiple?: boolean;
    selectedItems?: ISelectItem[];
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSelectedItems?: (item: ISelectItem) => void;
}

export const SelectLabel = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, isMultiple, selectedItems, setIsOpen, setSelectedItems, className = '', ...props }, ref) => {
        return <div ref={ref} {...props} className={cn('relative px-2 py-1 text-sm', className)} />;
    }
);

SelectLabel.displayName = 'SelectLabel';
