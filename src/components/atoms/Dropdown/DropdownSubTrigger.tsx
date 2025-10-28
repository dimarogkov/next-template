'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { Text } from '../Text';
import { ChevronRight } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    isSubOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const DropdownSubTrigger = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, isSubOpen, className = '', setIsOpen = () => {}, ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                className={cn(
                    `relative flex items-center justify-between cursor-pointer rounded-md px-2 py-1 transition-colors duration-300 hover:bg-border ${className}`,
                    {
                        'bg-border': isSubOpen,
                    }
                )}
            >
                <Text className='!w-fit !text-title'>{props.children}</Text>
                <ChevronRight className='size-4' />
            </div>
        );
    }
);

DropdownSubTrigger.displayName = 'DropdownSubTrigger';
export default DropdownSubTrigger;
