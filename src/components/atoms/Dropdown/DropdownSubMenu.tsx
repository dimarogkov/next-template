'use client';
import {
    Children,
    cloneElement,
    Dispatch,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    SetStateAction,
    useEffect,
    useState
} from 'react';
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

export const DropdownSubMenu = forwardRef<HTMLDivElement, Props>(
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
        const [ownSubTriggerElement, setOwnSubTriggerElement] = useState<HTMLElement | null>(null);
        const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);

        useEffect(() => {
            if (!isOpen) {
                setIsSubDropdownOpen(false);
            }
        }, [isOpen]);

        return (
            <div
                ref={ref}
                {...props}
                onClick={(e) => e.stopPropagation()}
                onMouseEnter={() => setIsSubDropdownOpen(true)}
                onMouseLeave={() => setIsSubDropdownOpen(false)}
                className={cn('relative', className)}
            >
                {Children.map(props.children, (child) => {
                    return isValidElement(child)
                        ? cloneElement(child as ReactElement<Record<string, unknown>>, {
                              triggerElement,
                              isOpen,
                              subTriggerElement: ownSubTriggerElement,
                              isSubOpen: isSubDropdownOpen,
                              setTriggerElement,
                              setIsOpen,
                              setSubTriggerElement: setOwnSubTriggerElement,
                              setIsSubOpen: setIsSubDropdownOpen
                          })
                        : child;
                })}
            </div>
        );
    }
);

DropdownSubMenu.displayName = 'DropdownSubMenu';
