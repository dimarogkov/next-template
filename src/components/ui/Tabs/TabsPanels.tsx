'use client';
import {
    Children,
    cloneElement,
    Dispatch,
    FC,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    SetStateAction,
} from 'react';
import { AnimatePresence } from 'framer-motion';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    hasAnimation?: boolean;
    activeIndex?: number;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number>>;
}

const TabsPanels: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ hasAnimation, activeIndex, className = '', setActiveIndex = () => {}, ...props }, ref) => {
        const childrenToRender = Children.map(props.children, (child, index) => {
            if (index === activeIndex) {
                if (isValidElement(child)) {
                    return cloneElement(child as ReactElement, { hasAnimation });
                }

                return child;
            }
        });

        return (
            <div ref={ref} {...props} className={`relative w-full ${className}`}>
                {hasAnimation ? (
                    <AnimatePresence mode='wait' initial={false}>
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
export default TabsPanels;
