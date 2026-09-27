'use client';
import {
    Children,
    cloneElement,
    Dispatch,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    SetStateAction
} from 'react';
import { AnimatePresence } from 'framer-motion';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    hasAnimation?: boolean;
    activeIndex?: number;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number>>;
}

export const TabsPanels = forwardRef<HTMLDivElement, Props>(
    ({ hasAnimation, activeIndex, className = '', setActiveIndex, ...props }, ref) => {
        const childrenToRender = Children.map(props.children, (child, index) => {
            if (index === activeIndex) {
                return isValidElement(child)
                    ? cloneElement(child as ReactElement<Record<string, unknown>>, { hasAnimation })
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
