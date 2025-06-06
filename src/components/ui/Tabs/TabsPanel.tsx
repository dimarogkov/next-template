'use client';
import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

export const TabsPanel: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    const animation: HTMLMotionProps<'div'> = {
        initial: { y: 8, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.2 } },
        exit: { y: -8, opacity: 0 },
    };

    return (
        <div ref={ref} {...props} className={`relative w-full text-base p-2.5 sm:p-4 ${className}`}>
            <motion.div {...animation}>{props.children}</motion.div>
        </div>
    );
});

TabsPanel.displayName = 'TabsPanel';
export default TabsPanel;
