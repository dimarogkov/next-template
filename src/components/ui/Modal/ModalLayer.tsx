'use client';
import { Dispatch, FC, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalLayer: FC<Props> = forwardRef<HTMLDivElement, Props>(({ setIsOpen = () => {}, ...props }, ref) => (
    <div
        ref={ref}
        {...props}
        onClick={() => setIsOpen(false)}
        className='absolute top-0 left-0 w-full h-full bg-black/30'
    />
));

ModalLayer.displayName = 'ModalLayer';
export default ModalLayer;
