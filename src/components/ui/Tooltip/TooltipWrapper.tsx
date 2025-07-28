'use client';
import {
    Children,
    cloneElement,
    FC,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    useState,
} from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const TooltipWrapper: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            ref={ref}
            {...props}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className={cn(
                `relative w-fit before:absolute before:content-[''] before:left-0 before:bottom-full before:w-full before:h-2.5 before:bg-transparent before:transition-all before:duration-200 ${className}`,
                {
                    'before:opacity-100 before:visible': isOpen,
                    'before:opacity-0 before:invisible': !isOpen,
                }
            )}
        >
            {Children.map(props.children, (child) => {
                if (isValidElement(child)) {
                    return cloneElement(child as ReactElement, { isOpen });
                }

                return child;
            })}
        </div>
    );
});

TooltipWrapper.displayName = 'TooltipWrapper';
export default TooltipWrapper;
