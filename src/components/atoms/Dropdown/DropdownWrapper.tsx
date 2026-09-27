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
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
}

export const DropdownWrapper = forwardRef<HTMLDivElement, Props>(
    ({ isOpen = false, className = '', ...props }, ref) => {
        const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
        const dropdownRef = useRef<HTMLDivElement>(null);

        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
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
            <div ref={ref || dropdownRef} {...props} className={cn('relative', className)}>
                {Children.map(props.children, (child) => {
                    return isValidElement(child)
                        ? cloneElement(child as ReactElement<Record<string, unknown>>, {
                              isOpen: isDropdownOpen,
                              setIsOpen: setIsDropdownOpen
                          })
                        : child;
                })}
            </div>
        );
    }
);

DropdownWrapper.displayName = 'DropdownWrapper';
