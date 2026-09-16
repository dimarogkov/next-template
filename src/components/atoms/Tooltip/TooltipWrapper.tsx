'use client';
import {
    Children,
    cloneElement,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    useState
} from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

export const TooltipWrapper = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            ref={ref}
            {...props}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className={cn(
                "relative w-fit before:absolute before:bottom-full before:left-0 before:h-2.5 before:w-full before:bg-transparent before:transition-all before:duration-200 before:content-['']",
                className,
                {
                    'before:visible before:opacity-100': isOpen,
                    'before:invisible before:opacity-0': !isOpen
                }
            )}
        >
            {Children.map(props.children, (child) => {
                return isValidElement(child) ? cloneElement(child as ReactElement<any>, { isOpen }) : child;
            })}
        </div>
    );
});

TooltipWrapper.displayName = 'TooltipWrapper';
