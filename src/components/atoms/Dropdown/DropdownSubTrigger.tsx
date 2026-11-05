'use client';
import { Dispatch, forwardRef, HTMLAttributes, KeyboardEvent, RefAttributes, SetStateAction } from 'react';
import { Text } from '@components/atoms/Text';
import { assignRefs } from '@utils';
import { ChevronRight } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    triggerElement?: HTMLElement | null;
    isOpen?: boolean;
    subTriggerElement?: HTMLElement | null;
    isSubOpen?: boolean;
    className?: string;
    setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSubTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
    setIsSubOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdownSubTrigger = forwardRef<HTMLDivElement, Props>(
    (
        {
            triggerElement,
            isOpen,
            subTriggerElement,
            isSubOpen,
            className = '',
            setTriggerElement,
            setIsOpen,
            setSubTriggerElement,
            setIsSubOpen,
            ...props
        },
        ref
    ) => {
        const setRefs = assignRefs<HTMLDivElement>(ref, setSubTriggerElement);

        const toggleSubOpen = () => setIsSubOpen?.((prevState) => !prevState);

        const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
                e.preventDefault();
                setIsSubOpen?.(true);
            }

            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                setIsSubOpen?.(false);
            }
        };

        return (
            <div
                ref={setRefs}
                {...props}
                tabIndex={0}
                role="menuitem"
                aria-haspopup="menu"
                aria-expanded={isSubOpen}
                onClick={toggleSubOpen}
                onKeyDown={onKeyDown}
                className={cn(
                    'hover:bg-border relative flex cursor-pointer items-center justify-between rounded-md px-2 py-1 outline-hidden transition-colors duration-300',
                    className,
                    {
                        'bg-border': isSubOpen
                    }
                )}
            >
                <Text className="text-title! w-fit!">{props.children}</Text>
                <ChevronRight aria-hidden="true" className="size-4" />
            </div>
        );
    }
);

DropdownSubTrigger.displayName = 'DropdownSubTrigger';
