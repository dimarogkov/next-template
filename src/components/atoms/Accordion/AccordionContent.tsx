'use client';
import { forwardRef, ReactNode, RefAttributes } from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    iconType?: 'arrow' | 'plus';
    accordionIndex?: number;
    activeIndex?: number;
    className?: string;
    classNameBlock?: string;
    children: ReactNode;
    setActiveIndex?: () => void;
}

const AccordionContent = forwardRef<HTMLDivElement, Props>(
    (
        {
            iconType,
            accordionIndex = 0,
            activeIndex,
            className = '',
            classNameBlock = '',
            children,
            setActiveIndex = () => {},
            ...props
        },
        ref
    ) => {
        const animation: HTMLMotionProps<'div'> = {
            initial: { height: 0 },
            animate: { height: 'auto' },
            exit: { height: 0 },
            transition: { type: 'spring', duration: 0.4, bounce: 0 },
        };

        return (
            <AnimatePresence initial={false}>
                {accordionIndex === activeIndex && (
                    <motion.div
                        ref={ref}
                        {...props}
                        {...animation}
                        className={`relative w-full text-base ${className}`}
                    >
                        <div className={`p-2.5 pt-0 sm:p-3 sm:pt-0 ${classNameBlock}`}>{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);

AccordionContent.displayName = 'AccordionContent';
export default AccordionContent;
