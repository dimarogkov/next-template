'use client';
import { Dispatch, forwardRef, HTMLAttributes, KeyboardEvent, RefAttributes, SetStateAction } from 'react';
import { ISelectItem } from '@interfaces/SelectItem';
import { Check } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLSpanElement>, RefAttributes<HTMLSpanElement> {
    value: string;
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

export const SelectOption = forwardRef<HTMLSpanElement, Props>(
    (
        {
            value,
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
        const isActive = selectedItems?.some((item) => value === item.value) || false;

        const selectItem = () => {
            if (disabled) return;

            setSelectedItems?.({ value, label: props.children as string });
            !isMultiple && setIsOpen?.(false);
        };

        const onKeyDown = (e: KeyboardEvent<HTMLSpanElement>) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectItem();
            }
        };

        return (
            <span
                ref={ref}
                {...props}
                role="option"
                tabIndex={disabled ? -1 : 0}
                aria-selected={isActive}
                aria-disabled={disabled || undefined}
                onClick={selectItem}
                onKeyDown={onKeyDown}
                className={cn(
                    'text-title relative flex w-full cursor-pointer items-center rounded-md px-2 py-1 pr-8',
                    className,
                    {
                        'hover:bg-border transition-colors duration-300': !isActive || (isActive && isMultiple),
                        'bg-border pointer-events-none': isActive && !isMultiple,
                        'pointer-events-none opacity-60': disabled
                    }
                )}
            >
                {props.children}

                <Check
                    className={cn('text-text absolute right-2 size-4 transition-all duration-300', {
                        'invisible opacity-0': !isActive,
                        'visible opacity-100': isActive
                    })}
                />
            </span>
        );
    }
);

SelectOption.displayName = 'SelectOption';
