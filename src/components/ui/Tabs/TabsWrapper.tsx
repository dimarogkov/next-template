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

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    hasAnimation?: boolean;
    className?: string;
}

const TabsWrapper: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ hasAnimation = false, className = '', ...props }, ref) => {
        const [activeIndex, setActiveIndex] = useState(0);

        return (
            <div ref={ref} {...props} className={`relative w-full rounded-md border border-border ${className}`}>
                {Children.map(props.children, (child) => {
                    if (isValidElement(child)) {
                        return cloneElement(child as ReactElement, { hasAnimation, activeIndex, setActiveIndex });
                    }

                    return child;
                })}
            </div>
        );
    }
);

TabsWrapper.displayName = 'TabsWrapper';
export default TabsWrapper;
