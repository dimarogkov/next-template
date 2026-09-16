'use client';
import { ButtonHTMLAttributes, forwardRef, RefAttributes } from 'react';
import { X } from 'lucide-react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {}

export const ModalClose = forwardRef<HTMLButtonElement, Props>(({ ...props }, ref) => {
    return (
        <button
            ref={ref}
            {...props}
            className="absolute top-2.5 right-2.5 z-10 size-5 cursor-pointer outline-hidden transition-opacity duration-300 hover:opacity-75"
        >
            <X className="text-text h-full w-full" />
        </button>
    );
});

ModalClose.displayName = 'ModalClose';
