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
    useState,
} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const DropdownSubMenu = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, className = '', setIsOpen = () => {}, ...props }, ref) => {
        const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);

        return (
            <div
                ref={ref}
                {...props}
                onClick={(e) => e.stopPropagation()}
                onMouseEnter={() => setIsSubDropdownOpen(true)}
                onMouseLeave={() => setIsSubDropdownOpen(false)}
                className={`relative ${className}`}
            >
                {Children.map(props.children, (child) => {
                    if (isValidElement(child)) {
                        return cloneElement(child as ReactElement, {
                            isOpen,
                            isSubOpen: isSubDropdownOpen,
                            setIsOpen,
                        });
                    }

                    return child;
                })}
            </div>
        );
    }
);

DropdownSubMenu.displayName = 'DropdownSubMenu';
export default DropdownSubMenu;
