'use client';
import {
    Children,
    cloneElement,
    FC,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    useEffect,
    useState,
} from 'react';
import { getChildName } from '@/src/helpers';
import ModalContent from './ModalContent';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const ModalWrapper: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const bodyClassList = document.body.classList;
        isModalOpen ? bodyClassList.add('lock') : bodyClassList.remove('lock');
    }, [isModalOpen]);

    return (
        <div ref={ref} {...props} className={`relative w-auto ${className}`}>
            {Children.map(props.children, (child) => {
                if (isValidElement(child)) {
                    const childName = getChildName(child);

                    return cloneElement(child as ReactElement, {
                        ...(childName === ModalContent.displayName
                            ? { isOpen: isModalOpen, setIsOpen: setIsModalOpen }
                            : { setIsOpen: setIsModalOpen }),
                    });
                }

                return child;
            })}
        </div>
    );
});

ModalWrapper.displayName = 'ModalWrapper';
export default ModalWrapper;
