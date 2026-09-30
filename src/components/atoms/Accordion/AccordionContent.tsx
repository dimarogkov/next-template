'use client';
import { forwardRef, ReactNode, RefAttributes } from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    iconType?: 'arrow' | 'plus';
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    accordionId?: string;
    accordionIndex?: number;
    activeIndexArr?: number[] | null;
    className?: string;
    classNameBlock?: string;
    children: ReactNode;
    toggleIndex?: (index: number) => void;
}

export const AccordionContent = forwardRef<HTMLDivElement, Props>(
    (
        {
            iconType,
            headingLevel,
            accordionId,
            accordionIndex = 0,
            activeIndexArr,
            className = '',
            classNameBlock = '',
            children,
            toggleIndex,
            ...props
        },
        ref
    ) => {
        const id = `${accordionId}-panel-${accordionIndex}`;
        const labelledby = `${accordionId}-trigger-${accordionIndex}`;
        const isIndexExist = activeIndexArr?.includes(accordionIndex);

        const animation: HTMLMotionProps<'div'> = {
            initial: { height: 0 },
            animate: { height: 'auto' },
            exit: { height: 0 },
            transition: { type: 'spring', duration: 0.4, bounce: 0 }
        };

        return (
            <AnimatePresence initial={false}>
                {isIndexExist && (
                    <motion.div
                        id={id}
                        ref={ref}
                        {...props}
                        {...animation}
                        role="region"
                        aria-labelledby={labelledby}
                        className={cn('relative w-full text-base', className)}
                    >
                        <div className={cn('p-2.5 pt-0 sm:p-3 sm:pt-0', classNameBlock)}>{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);

AccordionContent.displayName = 'AccordionContent';
