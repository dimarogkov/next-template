import {
    Children,
    cloneElement,
    forwardRef,
    ForwardRefExoticComponent,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
} from 'react';
import { LucideProps } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    variant?: 'default' | 'success' | 'warning' | 'error';
    icon?: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
    className?: string;
}

const AlertWrapper = forwardRef<HTMLDivElement, Props>(
    ({ variant = 'default', icon: Icon, className = '', ...props }, ref) => {
        const alertClasses = {
            default: 'border-border bg-border',
            success: 'border-green bg-green/10',
            warning: 'border-yellow bg-yellow/10',
            error: 'border-red bg-red/10',
        };

        const iconClasses = {
            default: 'text-title',
            success: 'text-green',
            warning: 'text-yellow',
            error: 'text-red',
        };

        return (
            <div
                ref={ref}
                {...props}
                className={`relative w-full rounded-md border p-2.5 sm:p-3 md:p-4 ${alertClasses[variant]} ${className}`}
            >
                <div
                    className={cn('relative w-full', {
                        'pl-6 md:pl-7': Icon,
                    })}
                >
                    {Icon && (
                        <Icon className={`absolute top-0.5 left-0 size-[18px] md:size-5 ${iconClasses[variant]}`} />
                    )}

                    {Children.map(props.children, (child) => {
                        return isValidElement(child) ? cloneElement(child as ReactElement, { variant }) : child;
                    })}
                </div>
            </div>
        );
    }
);

AlertWrapper.displayName = 'AlertWrapper';
export default AlertWrapper;
