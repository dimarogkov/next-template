'use client';
import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    hasAnimation?: boolean;
    className?: string;
}

const TabsPanel = forwardRef<HTMLDivElement, Props>(({ hasAnimation, className = '', ...props }, ref) => {
    const animation: HTMLMotionProps<'div'> = {
        initial: { y: 8, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.2 } },
        exit: { y: -8, opacity: 0 },
    };

    return (
        <div ref={ref} {...props} className={`relative w-full text-base p-2.5 sm:p-4 ${className}`}>
            {hasAnimation ? <motion.div {...animation}>{props.children}</motion.div> : <div>{props.children}</div>}
        </div>
    );
});

TabsPanel.displayName = 'TabsPanel';
export default TabsPanel;
