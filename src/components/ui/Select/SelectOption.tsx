'use client';
import { Dispatch, FC, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { ISelectItem } from '@/src/types/interfaces/SelectItem';
import { Check } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLSpanElement>, RefAttributes<HTMLSpanElement> {
    value?: string;
    isOpen?: boolean;
    selectedItem?: ISelectItem;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSelectedItem?: Dispatch<SetStateAction<ISelectItem>>;
}

const SelectOption: FC<Props> = forwardRef<HTMLSpanElement, Props>(
    (
        {
            value = '',
            isOpen,
            selectedItem,
            setIsOpen = () => {},
            setSelectedItem = () => {},
            className = '',
            ...props
        },
        ref
    ) => {
        const SelectItem = () => {
            setSelectedItem({ value, label: props.children as string });
            setIsOpen(false);
        };

        return (
            <span
                ref={ref}
                {...props}
                onClick={SelectItem}
                className={cn(
                    `relative flex items-center w-full rounded-md pr-8 px-2 py-1 text-title cursor-pointer ${className}`,
                    {
                        'transition-colors duration-300 hover:bg-border': value !== selectedItem?.value,
                        'bg-border pointer-events-none': value === selectedItem?.value,
                    }
                )}
            >
                {props.children}

                <Check
                    className={cn('absolute right-2 size-4 text-text transition-all duration-300', {
                        'opacity-0 invisible': value !== selectedItem?.value,
                        'opacity-100 visible': value === selectedItem?.value,
                    })}
                />
            </span>
        );
    }
);

SelectOption.displayName = 'SelectOption';
export default SelectOption;
