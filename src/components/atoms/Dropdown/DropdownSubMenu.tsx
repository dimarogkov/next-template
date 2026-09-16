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
    useState
} from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdownSubMenu = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, className = '', setIsOpen = () => {}, ...props }, ref) => {
        const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);

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
                        ? cloneElement(child as ReactElement<any>, {
                              isOpen,
                              isSubOpen: isSubDropdownOpen,
                              setIsOpen
                          })
                        : child;
                })}
            </div>
        );
    }
);

DropdownSubMenu.displayName = 'DropdownSubMenu';
