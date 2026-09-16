'use client';
import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    hasAnimation?: boolean;
    className?: string;
}

export const TabsPanel = forwardRef<HTMLDivElement, Props>(({ hasAnimation, className = '', ...props }, ref) => {
    const animation: HTMLMotionProps<'div'> = {
        initial: { y: 8, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.2 } },
        exit: { y: -8, opacity: 0 }
    };

    return (
        <div ref={ref} {...props} className={cn('relative w-full p-3 text-base sm:p-4', className)}>
            {hasAnimation ? <motion.div {...animation}>{props.children}</motion.div> : <div>{props.children}</div>}
        </div>
    );
});

TabsPanel.displayName = 'TabsPanel';
