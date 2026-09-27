'use client';
import {
    Children,
    cloneElement,
    Dispatch,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    ReactNode,
    RefAttributes,
    SetStateAction
} from 'react';
import { ISelectItem } from '@interfaces/SelectItem';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    isMultiple?: boolean;
    selectedItems?: ISelectItem[];
    className?: string;
    children?: ReactNode;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSelectedItems?: (item: ISelectItem) => void;
}

export const SelectGroup = forwardRef<HTMLDivElement, Props>(
    (
        {
            isOpen,
            isMultiple,
            selectedItems,
            setIsOpen = () => {},
            setSelectedItems = () => {},
            className = '',
            children,
            ...props
        },
        ref
    ) => {
        return (
            <div ref={ref} {...props} className={cn('relative flex flex-col gap-1', className)}>
                {Children.map(children, (child) => {
                    return isValidElement(child)
                        ? cloneElement(child as ReactElement<Record<string, unknown>>, {
                              isOpen,
                              isMultiple,
                              selectedItems,
                              setIsOpen,
                              setSelectedItems
                          })
                        : child;
                })}
            </div>
        );
    }
);

SelectGroup.displayName = 'SelectGroup';
