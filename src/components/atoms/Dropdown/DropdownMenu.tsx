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
} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const DropdownMenu = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, className = '', setIsOpen = () => {}, ...props }, ref) => {
        return (
            <div ref={ref} {...props} className={`relative flex flex-col gap-1 w-full ${className}`}>
                {Children.map(props.children, (child) => {
                    return isValidElement(child) ? cloneElement(child as ReactElement, { isOpen, setIsOpen }) : child;
                })}
            </div>
        );
    }
);

DropdownMenu.displayName = 'DropdownMenu';
export default DropdownMenu;
