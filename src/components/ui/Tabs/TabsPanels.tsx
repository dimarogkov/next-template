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
    activeIndex?: number;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number>>;
}

const TabsPanels: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ activeIndex, className = '', setActiveIndex = () => {}, ...props }, ref) => {
        return (
            <div ref={ref} {...props} className={`relative w-full ${className}`}>
                <AnimatePresence mode='wait'>
                    {Children.map(props.children, (child, index) => {
                        if (index === activeIndex) {
                            if (isValidElement(child)) {
                                return cloneElement(child as ReactElement);
                            }

                            return child;
                        }
                    })}
                </AnimatePresence>
            </div>
        );
    }
);

TabsPanels.displayName = 'TabsPanels';
export default TabsPanels;
