'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { ISelectItem } from '@interfaces/SelectItem';
import { Check } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLSpanElement>, RefAttributes<HTMLSpanElement> {
    value: string;
    isOpen?: boolean;
    isMultiple?: boolean;
    selectedItems?: ISelectItem[];
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSelectedItems?: (item: ISelectItem) => void;
}

const SelectOption = forwardRef<HTMLSpanElement, Props>(
    (
        {
            value,
            isOpen,
            isMultiple,
            selectedItems,
            setIsOpen = () => {},
            setSelectedItems = () => {},
            className = '',
            ...props
        },
        ref
    ) => {
        const isActive = selectedItems?.some((item) => value === item.value) || false;

        const selectItem = () => {
            setSelectedItems({ value, label: props.children as string });
            !isMultiple && setIsOpen(false);
        };

        return (
            <span
                ref={ref}
                {...props}
                onClick={selectItem}
                className={cn(
                    `relative flex items-center w-full rounded-md pr-8 px-2 py-1 text-title cursor-pointer ${className}`,
                    {
                        'transition-colors duration-300 hover:bg-border': !isActive || (isActive && isMultiple),
                        'bg-border pointer-events-none': isActive && !isMultiple,
                    }
                )}
            >
                {props.children}

                <Check
                    className={cn('absolute right-2 size-4 text-text transition-all duration-300', {
                        'opacity-0 invisible': !isActive,
                        'opacity-100 visible': isActive,
                    })}
                />
            </span>
        );
    }
);

SelectOption.displayName = 'SelectOption';
export default SelectOption;
