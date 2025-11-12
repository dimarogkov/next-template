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
    useState,
} from 'react';
import { usePathname } from 'next/navigation';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const ModalWrapper = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsModalOpen(false);
    }, [pathname]);

    useEffect(() => {
        const bodyClassList = document.body.classList;
        isModalOpen ? bodyClassList.add('lock') : bodyClassList.remove('lock');
    }, [isModalOpen]);

    return (
        <div ref={ref} {...props} className={`relative w-fit ${className}`}>
            {Children.map(props.children, (child) => {
                return isValidElement(child)
                    ? cloneElement(child as ReactElement, { isOpen: isModalOpen, setIsOpen: setIsModalOpen })
                    : child;
            })}
        </div>
    );
});

ModalWrapper.displayName = 'ModalWrapper';
export default ModalWrapper;
