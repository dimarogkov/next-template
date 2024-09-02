import { HTMLAttributes, RefAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement>, RefAttributes<HTMLSpanElement> {}

const Badge: React.FC<Props> = forwardRef<HTMLSpanElement, Props>(({ ...props }, ref) => (
    <span ref={ref} {...props} className='text-base px-3 py-1.5 rounded bg-gray' />
));

Badge.displayName = 'Badge';
export default Badge;
