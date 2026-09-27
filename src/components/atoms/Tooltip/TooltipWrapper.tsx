'use client';
import {
    Children,
    cloneElement,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    useId,
    useState
} from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    align?: 'start' | 'center' | 'end';
    position?: 'bottom' | 'left' | 'right' | 'top';
    className?: string;
}

export const TooltipWrapper = forwardRef<HTMLDivElement, Props>(
    ({ align = 'center', position = 'top', className = '', ...props }, ref) => {
        const [isOpen, setIsOpen] = useState(false);
        const tooltipId = useId();

        const beforeClasses = {
            bottom: 'before:top-full before:left-0 before:h-2.5 before:w-full',
            left: 'before:top-0 before:-left-2.5 before:h-full before:w-2.5',
            right: 'before:top-0 before:-right-2.5 before:h-full before:w-2.5',
            top: 'before:bottom-full before:left-0 before:h-2.5 before:w-full'
        };

        const handleKeyDown = (key: string) => {
            if (key === 'Escape') {
                setIsOpen(false);
            }
        };

        return (
            <div
                ref={ref}
                {...props}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                onFocus={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}
                onKeyDown={({ key }) => handleKeyDown(key)}
                className={cn(
                    "relative w-fit before:absolute before:bg-transparent before:transition-all before:duration-200 before:content-['']",
                    beforeClasses[position],
                    className,
                    {
                        'before:visible before:opacity-100': isOpen,
                        'before:invisible before:opacity-0': !isOpen
                    }
                )}
            >
                {Children.map(props.children, (child) => {
                    return isValidElement(child)
                        ? cloneElement(child as ReactElement<Record<string, unknown>>, {
                              align,
                              position,
                              tooltipId,
                              isOpen
                          })
                        : child;
                })}
            </div>
        );
    }
);

TooltipWrapper.displayName = 'TooltipWrapper';
