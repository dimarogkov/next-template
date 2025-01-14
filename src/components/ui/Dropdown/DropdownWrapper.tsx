'use client';
import {
    Children,
    cloneElement,
    DetailsHTMLAttributes,
    FC,
    forwardRef,
    isValidElement,
    ReactElement,
    RefAttributes,
    useEffect,
    useRef,
    useState,
} from 'react';

interface Props extends DetailsHTMLAttributes<HTMLDetailsElement>, RefAttributes<HTMLDetailsElement> {
    isOpen?: boolean;
    className?: string;
}

const DropdownWrapper: FC<Props> = forwardRef<HTMLDetailsElement, Props>(
    ({ isOpen = false, className = '', ...props }, ref) => {
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
        const dropdownRef = useRef<HTMLDetailsElement>(null);

        useEffect(() => {
            setIsDropdownOpen(isOpen);
        }, [isOpen]);

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
            <details ref={ref || dropdownRef} {...props} open={isDropdownOpen} className={`relative ${className}`}>
                {Children.map(props.children, (child) => {
                    if (isValidElement(child)) {
                        return cloneElement(child as ReactElement, {
                            isOpen: isDropdownOpen,
                            setIsOpen: setIsDropdownOpen,
                        });
                    }

                    return child;
                })}
            </details>
        );
    }
);

DropdownWrapper.displayName = 'DropdownWrapper';
export default DropdownWrapper;
