'use client';
import { Children, cloneElement, forwardRef, HTMLAttributes, isValidElement, ReactElement, RefAttributes } from 'react';
import { AnimatePresence } from 'framer-motion';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    tabsId?: string;
    hasAnimation?: boolean;
    activeIndex?: number;
    className?: string;
    setActiveIndex?: (index: number) => void;
}

export const TabsPanels = forwardRef<HTMLDivElement, Props>(
    ({ tabsId, hasAnimation, activeIndex, className = '', setActiveIndex, ...props }, ref) => {
        const childrenToRender = Children.map(props.children, (child, index) => {
            if (index === activeIndex) {
                return isValidElement(child)
                    ? cloneElement(child as ReactElement<Record<string, unknown>>, {
                          tabsId,
                          hasAnimation,
                          id: `${tabsId}-panel-${index}`,
                          'aria-labelledby': `${tabsId}-tab-${index}`
                      })
                    : child;
            }
        });

        return (
            <div ref={ref} {...props} className={cn('relative w-full', className)}>
                {hasAnimation ? (
                    <AnimatePresence mode="wait" initial={false}>
                        {childrenToRender}
                    </AnimatePresence>
                ) : (
                    <>{childrenToRender}</>
                )}
            </div>
        );
    }
);

TabsPanels.displayName = 'TabsPanels';
