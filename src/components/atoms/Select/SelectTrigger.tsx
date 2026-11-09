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
import { Text } from '@components/atoms/Text';
import { assignRefs } from '@utils';
import { ChevronDown, LucideProps } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    placeholder?: string;
    triggerElement?: HTMLElement | null;
    isOpen?: boolean;
    isMultiple?: boolean;
    selectedItems?: ISelectItem[];
    disabled?: boolean;
    icon?: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
    className?: string;
    setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSelectedItems?: (item: ISelectItem) => void;
}

export const SelectTrigger = forwardRef<HTMLDivElement, Props>(
    (
        {
            placeholder = 'Select',
            triggerElement,
            isOpen,
            isMultiple,
            selectedItems,
            disabled = false,
            icon,
            className = '',
            setTriggerElement,
            setIsOpen,
            setSelectedItems,
            ...props
        },
        ref
    ) => {
        const selectedText = selectedItems?.map((item) => item.label).join(', ');
        const hasValue = !!selectedItems?.length;
        const Icon = icon || ChevronDown;

        const setRefs = assignRefs<HTMLDivElement>(ref, setTriggerElement);
        const toggleOpen = () => !disabled && setIsOpen?.((prevState) => !prevState);

        const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleOpen();
            }
        };

        return (
            <div
                ref={setRefs}
                {...props}
                role="button"
                tabIndex={disabled ? -1 : 0}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-disabled={disabled || undefined}
                onClick={toggleOpen}
                onKeyDown={onKeyDown}
                className={cn(
                    'border-border relative flex h-10 w-full cursor-pointer items-center rounded-md border px-4 pr-12 select-none',
                    className,
                    {
                        'pointer-events-none opacity-60': disabled
                    }
                )}
            >
                <Text className={cn({ 'text-title': hasValue })}>{hasValue ? selectedText : placeholder}</Text>
                <Icon className="absolute right-4 size-5" />
            </div>
        );
    }
);

SelectTrigger.displayName = 'SelectTrigger';
