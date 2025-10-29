'use client';
import { Dispatch, forwardRef, ForwardRefExoticComponent, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
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

const SelectTrigger = forwardRef<HTMLDivElement, Props>(
    (
        {
            placeholder = 'Select',
            isOpen,
            isMultiple,
            selectedItems,
            icon,
            setIsOpen = () => {},
            setSelectedItems = () => {},
            className = '',
            ...props
        },
        ref
    ) => {
        const selectedText = selectedItems?.map((item) => item.label).join(', ');
        const hasValue = !!selectedItems?.length;
        const Icon = icon || ChevronDown;

        return (
            <div
                ref={ref}
                {...props}
                onClick={() => setIsOpen((prevState) => !prevState)}
                className={`relative flex items-center w-full h-10 px-4 pr-12 rounded-md cursor-pointer select-none border border-border ${className}`}
            >
                <Text className={cn({ 'text-title': hasValue })}>{hasValue ? selectedText : placeholder}</Text>
                <Icon className='absolute right-4 size-5' />
            </div>
        );
    }
);

SelectTrigger.displayName = 'SelectTrigger';
export default SelectTrigger;
