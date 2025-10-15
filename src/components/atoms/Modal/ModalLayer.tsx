'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalLayer = forwardRef<HTMLDivElement, Props>(({ setIsOpen = () => {}, ...props }, ref) => {
    return (
        <div
            ref={ref}
            {...props}
            onClick={() => setIsOpen(false)}
            className='absolute top-0 left-0 w-full h-full bg-black/60'
        />
    );
});

ModalLayer.displayName = 'ModalLayer';
export default ModalLayer;
