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
    defaultActiveIndex?: number;
    activeIndex?: number;
    hasAnimation?: boolean;
    className?: string;
    onActiveIndexChange?: (index: number) => void;
}

export const TabsWrapper = forwardRef<HTMLDivElement, Props>(
    (
        { defaultActiveIndex = 0, activeIndex, hasAnimation = false, className = '', onActiveIndexChange, ...props },
        ref
    ) => {
        const isControlled = activeIndex !== undefined;
        const [internalActiveIndex, setInternalActiveIndex] = useState(defaultActiveIndex);
        const resolvedActiveIndex = isControlled ? activeIndex : internalActiveIndex;
        const tabsId = useId();

        const handleActiveIndexChange = (index: number) => {
            if (!isControlled) {
                setInternalActiveIndex(index);
            }

            onActiveIndexChange?.(index);
        };

        return (
            <div ref={ref} {...props} className={cn('border-border relative w-full rounded-md border', className)}>
                {Children.map(props.children, (child) => {
                    return isValidElement(child)
                        ? cloneElement(child as ReactElement<Record<string, unknown>>, {
                              tabsId,
                              hasAnimation,
                              activeIndex: resolvedActiveIndex,
                              setActiveIndex: handleActiveIndexChange
                          })
                        : child;
                })}
            </div>
        );
    }
);

TabsWrapper.displayName = 'TabsWrapper';
