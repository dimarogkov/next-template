'use client';
import {
    Children,
    cloneElement,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    useEffect,
    useRef,
    useState
} from 'react';
import { assignRefs } from '@utils';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
}

export const DropdownWrapper = forwardRef<HTMLDivElement, Props>(
    ({ isOpen = false, className = '', ...props }, ref) => {
        const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
        const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(null);
        const dropdownRef = useRef<HTMLDivElement>(null);
        const setRefs = assignRefs<HTMLDivElement>(ref, dropdownRef);

        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Element;
            const isInsideWrapper = dropdownRef.current?.contains(target);
            const isInsidePortal = target.closest('[data-dropdown-portal]');

            if (!isInsideWrapper && !isInsidePortal) {
                setIsDropdownOpen(false);
            }
        };

        useEffect(() => {
            document.addEventListener('click', handleClickOutside, true);

            return () => {
                document.removeEventListener('click', handleClickOutside, true);
            };
        }, []);

        return (
            <div ref={setRefs} {...props} className={cn('relative', className)}>
                {Children.map(props.children, (child) => {
                    return isValidElement(child)
                        ? cloneElement(child as ReactElement<Record<string, unknown>>, {
                              triggerElement,
                              isOpen: isDropdownOpen,
                              setTriggerElement,
                              setIsOpen: setIsDropdownOpen
                          })
                        : child;
                })}
            </div>
        );
    }
);

DropdownWrapper.displayName = 'DropdownWrapper';
