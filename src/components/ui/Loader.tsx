import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {}

const Loader: FC<Props> = forwardRef<HTMLDivElement, Props>(({ ...props }, ref) => (
    <div
        ref={ref}
        {...props}
        className='fixed z-10 top-0 left-0 flex items-center justify-center w-full h-full bg-white'
    >
        <svg viewBox='25 25 50 50' className='loader w-12'>
            <circle r='20' cy='50' cx='50' className='loader-circle fill-none stroke-blue' />
        </svg>
    </div>
));

Loader.displayName = 'Loader';
export default Loader;
