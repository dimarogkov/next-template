'use client';
import { Dispatch, FC, forwardRef, ReactNode, RefAttributes, SetStateAction } from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { EnumAccordionIcon } from '@/src/types/enums';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    iconType?: EnumAccordionIcon;
    accordionIndex?: number;
    activeIndex?: number;
    children: ReactNode;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number | null>>;
}

const AccordionContent: FC<Props> = forwardRef<HTMLDivElement, Props>(
    (
        { iconType, accordionIndex = 0, activeIndex, children, className = '', setActiveIndex = () => {}, ...props },
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
                        <div className='p-2.5 pt-0 sm:p-3 sm:pt-0'>{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);

AccordionContent.displayName = 'AccordionContent';
export default AccordionContent;
