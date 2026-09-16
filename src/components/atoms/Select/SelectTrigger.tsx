'use client';
import {
    Dispatch,
    forwardRef,
    ForwardRefExoticComponent,
    HTMLAttributes,
    KeyboardEvent,
    RefAttributes,
    SetStateAction
} from 'react';
import { ISelectItem } from '@interfaces/SelectItem';
import { Text } from '@components/atoms';
import { ChevronDown, LucideProps } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    placeholder?: string;
    isOpen?: boolean;
    isMultiple?: boolean;
    selectedItems?: ISelectItem[];
    className?: string;
    icon?: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSelectedItems?: (item: ISelectItem) => void;
}

export const SelectTrigger = forwardRef<HTMLDivElement, Props>(
    (
        {
            placeholder = 'Select',
            isOpen,
            isMultiple,
            selectedItems,
            icon,
            setIsOpen = () => {},
            setSelectedItems,
            className = '',
            ...props
        },
        ref
    ) => {
        const selectedText = selectedItems?.map((item) => item.label).join(', ');
        const hasValue = !!selectedItems?.length;
        const Icon = icon || ChevronDown;

        const toggleOpen = () => setIsOpen((prevState) => !prevState);

        const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleOpen();
            }
        };

        return (
            <div
                ref={ref}
                {...props}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                onClick={toggleOpen}
                onKeyDown={onKeyDown}
                className={cn(
                    'border-border relative flex h-10 w-full cursor-pointer items-center rounded-md border px-4 pr-12 select-none',
                    className
                )}
            >
                <Text className={cn({ 'text-title': hasValue })}>{hasValue ? selectedText : placeholder}</Text>
                <Icon className="absolute right-4 size-5" />
            </div>
        );
    }
);

SelectTrigger.displayName = 'SelectTrigger';
