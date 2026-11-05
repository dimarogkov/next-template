'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { ISelectItem } from '@interfaces/SelectItem';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    triggerElement?: HTMLElement | null;
    isOpen?: boolean;
    isMultiple?: boolean;
    selectedItems?: ISelectItem[];
    disabled?: boolean;
    labelId?: string;
    className?: string;
    setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSelectedItems?: (item: ISelectItem) => void;
}

export const SelectLabel = forwardRef<HTMLDivElement, Props>(
    (
        {
            triggerElement,
            isOpen,
            isMultiple,
            selectedItems,
            disabled,
            labelId,
            className = '',
            setTriggerElement,
            setIsOpen,
            setSelectedItems,
            ...props
        },
        ref
    ) => {
        return <div ref={ref} {...props} id={labelId} className={cn('relative px-2 py-1 text-sm', className)} />;
    }
);

SelectLabel.displayName = 'SelectLabel';
