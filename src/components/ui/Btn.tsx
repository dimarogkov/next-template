import { ButtonHTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const Btn: React.FC<Props> = forwardRef<HTMLButtonElement, Props>(({ className = '', ...props }, ref) => (
    <button
        ref={ref}
        {...props}
        className={cn(
            `flex items-center justify-center w-full sm:w-fit sm:min-w-[120px] lg:min-w-[140px] h-[40px] lg:h-[44px] font-media px-[16px] rounded-[4px] text-[#fff] bg-black transition-opacity duration-300 hover:opacity-80 ${className}`,
            {
                'pointer-events-none bg-slate-300': props.disabled,
            }
        )}
    />
));

Btn.displayName = 'Btn';
export default Btn;
