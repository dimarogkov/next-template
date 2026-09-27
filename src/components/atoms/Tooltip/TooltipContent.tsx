'use client';
import { forwardRef, RefAttributes } from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { Triangle } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    align?: 'start' | 'center' | 'end';
    position?: 'bottom' | 'left' | 'right' | 'top';
    tooltipId?: string;
    isOpen?: boolean;
    className?: string;
}

export const TooltipContent = forwardRef<HTMLDivElement, Props>(
    ({ align = 'center', position = 'top', tooltipId, isOpen, className = '', ...props }, ref) => {
        const isVerticalPosition = position === 'top' || position === 'bottom';
        const alignTranslate = { start: '0%', center: '-50%', end: '-100%' };
        const alignAxis = isVerticalPosition ? { x: alignTranslate[align] } : { y: alignTranslate[align] };

        const animation: HTMLMotionProps<'div'> = {
            initial: { ...alignAxis, scale: 0.95, opacity: 0 },
            animate: { ...alignAxis, scale: 1, opacity: 1, transition: { ease: [0.215, 0.61, 0.355, 1] } },
            exit: { ...alignAxis, scale: 0.95, opacity: 0 }
        };

        const blockPositionClasses = {
            bottom: 'top-[calc(100%+10px)]',
            left: 'right-[calc(100%+10px)]',
            right: 'left-[calc(100%+10px)]',
            top: 'bottom-[calc(100%+10px)]'
        };

        const blockAlignClasses = isVerticalPosition
            ? { start: 'left-0', center: 'left-1/2', end: 'left-full' }
            : { start: 'top-0', center: 'top-1/2', end: 'top-full' };

        const trianglePositionClasses = {
            bottom: '-top-2',
            left: '-right-2 rotate-90',
            right: '-left-2 rotate-270',
            top: '-bottom-2 rotate-180'
        };

        const triangleAlignClasses = isVerticalPosition
            ? { start: 'left-3', center: 'left-1/2 -translate-x-1/2', end: 'right-3' }
            : { start: 'top-3', center: 'top-1/2 -translate-y-1/2', end: 'bottom-3' };

        return (
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        id={tooltipId}
                        ref={ref}
                        {...props}
                        {...animation}
                        role="tooltip"
                        className={cn(
                            'border-border bg-title text-bg absolute z-10 flex w-max items-center justify-center rounded-md border px-1.5 py-1 text-sm will-change-transform',
                            blockPositionClasses[position],
                            blockAlignClasses[align],
                            className
                        )}
                    >
                        <>
                            {props.children}

                            <Triangle
                                className={cn(
                                    'fill-title text-title absolute size-3',
                                    trianglePositionClasses[position],
                                    triangleAlignClasses[align]
                                )}
                            />
                        </>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);

TooltipContent.displayName = 'TooltipContent';
