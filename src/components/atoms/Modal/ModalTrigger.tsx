'use client';
import { Dispatch, forwardRef, HTMLAttributes, KeyboardEvent, RefAttributes, SetStateAction } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export const ModalTrigger = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, className = '', setIsOpen = () => {}, ...props }, ref) => {
        const openModal = () => setIsOpen(true);

        const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal();
            }
        };

        return (
            <div
                ref={ref}
                {...props}
                role="button"
                tabIndex={0}
                onClick={openModal}
                onKeyDown={onKeyDown}
                className={cn('relative cursor-pointer list-none', className)}
            />
        );
    }
);

ModalTrigger.displayName = 'ModalTrigger';
