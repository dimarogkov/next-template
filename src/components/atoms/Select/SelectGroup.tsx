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
    useId
} from 'react';
import { ISelectItem } from '@interfaces/SelectItem';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    triggerElement?: HTMLElement | null;
    isOpen?: boolean;
    isMultiple?: boolean;
    selectedItems?: ISelectItem[];
    disabled?: boolean;
    className?: string;
    children?: ReactNode;
    setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSelectedItems?: (item: ISelectItem) => void;
}

export const SelectGroup = forwardRef<HTMLDivElement, Props>(
    (
        {
            triggerElement,
            isOpen,
            isMultiple,
            selectedItems,
            disabled,
            className = '',
            children,
            setTriggerElement,
            setIsOpen,
            setSelectedItems,
            ...props
        },
        ref
    ) => {
        const labelId = useId();

        return (
            <div
                ref={ref}
                {...props}
                role="group"
                aria-labelledby={labelId}
                className={cn('relative flex flex-col gap-1', className)}
            >
                {Children.map(children, (child) => {
                    return isValidElement(child)
                        ? cloneElement(child as ReactElement<Record<string, unknown>>, {
                              triggerElement,
                              isOpen,
                              isMultiple,
                              selectedItems,
                              disabled: disabled || (child.props as { disabled?: boolean }).disabled,
                              labelId,
                              setTriggerElement,
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
