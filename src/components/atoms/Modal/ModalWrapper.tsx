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
    useState
} from 'react';
import { usePathname } from 'next/navigation';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

export const ModalWrapper = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsModalOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.classList.toggle('lock', isModalOpen);

        return () => {
            document.body.classList.remove('lock');
        };
    }, [isModalOpen]);

    return (
        <div ref={ref} {...props} className={cn('relative w-fit', className)}>
            {Children.map(props.children, (child) => {
                return isValidElement(child)
                    ? cloneElement(child as ReactElement<any>, { isOpen: isModalOpen, setIsOpen: setIsModalOpen })
                    : child;
            })}
        </div>
    );
});

ModalWrapper.displayName = 'ModalWrapper';
