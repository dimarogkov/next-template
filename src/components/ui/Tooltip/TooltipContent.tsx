'use client';
import { FC, forwardRef, RefAttributes } from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { Triangle } from 'lucide-react';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
}

const TooltipContent: FC<Props> = forwardRef<HTMLDivElement, Props>(({ isOpen, className = '', ...props }, ref) => {
    const animation: HTMLMotionProps<'div'> = {
        initial: { x: '-50%', scale: 0.95, opacity: 0 },
        animate: { x: '-50%', scale: 1, opacity: 1, transition: { ease: [0.215, 0.61, 0.355, 1] } },
        exit: { x: '-50%', scale: 0.95, opacity: 0 },
    };

    return (
        <AnimatePresence mode='wait'>
            {isOpen && (
                <motion.div
                    ref={ref}
                    {...props}
                    {...animation}
                    className={`absolute left-1/2 bottom-[calc(100%+12px)] flex justify-center z-10 w-max text-sm rounded-md px-1.5 py-1 border border-border bg-title text-bg will-change-transform ${className}`}
                >
                    <>
                        {props.children}
                        <Triangle className='absolute -bottom-2 size-3 text-title fill-title rotate-180' />
                    </>
                </motion.div>
            )}
        </AnimatePresence>
    );
});

TooltipContent.displayName = 'TooltipContent';
export default TooltipContent;
