import { ButtonHTMLAttributes, FC, forwardRef, RefAttributes } from 'react';
import { X } from 'lucide-react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {}

const ModalClose: FC<Props> = forwardRef<HTMLButtonElement, Props>(({ ...props }, ref) => {
    return (
        <button
            ref={ref}
            {...props}
            className='absolute z-10 top-3 right-3 w-7 h-7 transition-opacity duration-300 hover:opacity-75'
        >
            <X className='w-full h-full text-black' />
        </button>
    );
});

ModalClose.displayName = 'ModalClose';
export default ModalClose;
