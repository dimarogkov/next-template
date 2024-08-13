import { forwardRef, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement> {}

const Loader: React.FC<Props> = forwardRef<HTMLSpanElement, Props>(({ ...props }, ref) => (
    <div className='fixed z-10 top-0 left-0 flex items-center justify-center w-full h-full bg-white'>
        <span ref={ref} {...props} className='loading loading-spinner loading-lg text-blue' />
    </div>
));

Loader.displayName = 'Loader';
export default Loader;
