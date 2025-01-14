'use client';
import { Dispatch, FC, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const ModalTrigger: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, className = '', setIsOpen = () => {}, ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                onClick={() => setIsOpen(true)}
                className={`relative cursor-pointer list-none ${className}`}
            />
        );
    }
);

ModalTrigger.displayName = 'ModalTrigger';
export default ModalTrigger;
