'use client';
import { forwardRef, RefAttributes } from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { Triangle } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
}

export const TooltipContent = forwardRef<HTMLDivElement, Props>(({ isOpen, className = '', ...props }, ref) => {
    const animation: HTMLMotionProps<'div'> = {
        initial: { x: '-50%', scale: 0.95, opacity: 0 },
        animate: { x: '-50%', scale: 1, opacity: 1, transition: { ease: [0.215, 0.61, 0.355, 1] } },
        exit: { x: '-50%', scale: 0.95, opacity: 0 }
    };

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <motion.div
                    ref={ref}
                    {...props}
                    {...animation}
                    className={cn(
                        'border-border bg-title text-bg absolute bottom-[calc(100%+10px)] left-1/2 z-10 flex w-max justify-center rounded-md border px-1.5 py-1 text-sm will-change-transform',
                        className
                    )}
                >
                    <>
                        {props.children}
                        <Triangle className="fill-title text-title absolute -bottom-2 size-3 rotate-180" />
                    </>
                </motion.div>
            )}
        </AnimatePresence>
    );
});

TooltipContent.displayName = 'TooltipContent';
