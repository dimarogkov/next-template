import { ButtonHTMLAttributes, FC, forwardRef, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    variant?: 'default' | 'secondary' | 'outline' | 'ghost';
    isLink?: boolean;
    className?: string;
}

const BtnWrapper: FC<Props> = forwardRef<HTMLButtonElement, Props>(
    ({ variant = 'default', isLink = false, className = '', ...props }, ref) => {
        return (
            <button
                ref={ref}
                {...props}
                type={props.type || 'button'}
                className={cn(
                    `flex items-center justify-center gap-1.5 w-full sm:w-fit h-10 rounded-md outline-none transition-all duration-300 will-change-transform active:scale-95 ${className}`,
                    {
                        'bg-border text-text pointer-events-none select-none': props.disabled,
                        'bg-title text-bg hover:opacity-80': !props.disabled && variant === 'default',
                        'bg-yellow text-bg hover:opacity-80': !props.disabled && variant === 'secondary',
                        'border border-border text-title hover:opacity-80': !props.disabled && variant === 'outline',
                        'text-text hover:bg-border': !props.disabled && variant === 'ghost',
                        'px-4': !isLink,
                    }
                )}
            />
        );
    }
);

BtnWrapper.displayName = 'BtnWrapper';
export default BtnWrapper;
