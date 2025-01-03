'use client';
import { Dispatch, FC, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const ModalTrigger: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ setIsOpen = () => {}, className = '', ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                onClick={() => setIsOpen(true)}
                className={`relative w-auto cursor-pointer list-none ${className}`}
            />
        );
    }
);

ModalTrigger.displayName = 'ModalTrigger';
export default ModalTrigger;
