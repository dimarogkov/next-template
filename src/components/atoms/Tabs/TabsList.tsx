'use client';
import { Children, cloneElement, forwardRef, HTMLAttributes, isValidElement, ReactElement, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLUListElement>, RefAttributes<HTMLUListElement> {
    tabsId?: string;
    hasAnimation?: boolean;
    activeIndex?: number;
    className?: string;
    setActiveIndex?: (index: number) => void;
}

export const TabsList = forwardRef<HTMLUListElement, Props>(
    ({ tabsId, hasAnimation, activeIndex, className = '', setActiveIndex, ...props }, ref) => {
        return (
            <ul
                ref={ref}
                {...props}
                role="tablist"
                className={cn('border-border relative flex w-full border-b', className)}
            >
                {Children.map(props.children, (child, index) => {
                    return isValidElement(child)
                        ? cloneElement(child as ReactElement<Record<string, unknown>>, {
                              tabsId,
                              index,
                              hasAnimation,
                              activeIndex,
                              id: `${tabsId}-tab-${index}`,
                              'aria-controls': `${tabsId}-panel-${index}`,
                              setActiveIndex
                          })
                        : child;
                })}
            </ul>
        );
    }
);

TabsList.displayName = 'TabsList';
