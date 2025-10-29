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
    SetStateAction,
} from 'react';
import { ISelectItem } from '@interfaces/SelectItem';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    isMultiple?: boolean;
    selectedItems?: ISelectItem[];
    className?: string;
    children?: ReactNode;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSelectedItems?: (item: ISelectItem) => void;
}

const SelectLabel = forwardRef<HTMLDivElement, Props>(
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
            <div ref={ref} {...props} className={`relative text-sm px-2 py-1 ${className}`}>
                {Children.map(children, (child) => {
                    if (isValidElement(child)) {
                        return cloneElement(child as ReactElement, {
                            isOpen,
                            isMultiple,
                            selectedItems,
                            setIsOpen,
                            setSelectedItems,
                        });
                    }

                    return child;
                })}
            </div>
        );
    }
);

SelectLabel.displayName = 'SelectLabel';
export default SelectLabel;
