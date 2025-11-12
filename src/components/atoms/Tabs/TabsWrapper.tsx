'use client';
import {
    Children,
    cloneElement,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    useState,
} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    defaultActiveIndex?: number;
    hasAnimation?: boolean;
    className?: string;
}

const TabsWrapper = forwardRef<HTMLDivElement, Props>(
    ({ defaultActiveIndex = 0, hasAnimation = false, className = '', ...props }, ref) => {
        const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

        return (
            <div ref={ref} {...props} className={`relative w-full rounded-md border border-border ${className}`}>
                {Children.map(props.children, (child) => {
                    return isValidElement(child)
                        ? cloneElement(child as ReactElement, { hasAnimation, activeIndex, setActiveIndex })
                        : child;
                })}
            </div>
        );
    }
);

TabsWrapper.displayName = 'TabsWrapper';
export default TabsWrapper;
