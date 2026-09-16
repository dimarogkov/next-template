'use client';
import { Dispatch, forwardRef, ReactNode, RefAttributes, SetStateAction } from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { ModalLayer } from './ModalLayer';
import { ModalClose } from './ModalClose';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    disableCloseBtn?: boolean;
    children?: ReactNode;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export const ModalContent = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, disableCloseBtn = false, children, className = '', setIsOpen = () => {}, ...props }, ref) => {
        const animation: HTMLMotionProps<'div'> = {
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 0.3, ease: [0.215, 0.61, 0.355, 1] } },
            exit: { opacity: 0 }
        };

        const animationPopup: HTMLMotionProps<'div'> = {
            initial: { scale: 0.95, opacity: 0 },
            animate: { scale: 1, opacity: 1, transition: { ease: [0.215, 0.61, 0.355, 1] } },
            exit: { scale: 0.95, opacity: 0 }
        };

        return (
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        {...animation}
                        className="fixed top-0 left-0 z-20 flex h-svh w-full items-center justify-center"
                    >
                        <ModalLayer setIsOpen={setIsOpen} />

                        <motion.div
                            ref={ref}
                            {...props}
                            {...animationPopup}
                            className={cn(
                                'border-border bg-bg relative max-w-[calc(100%-32px)] overflow-hidden rounded-md border will-change-transform md:w-150',
                                className
                            )}
                        >
                            {!disableCloseBtn && <ModalClose onClick={() => setIsOpen(false)} />}
                            {children}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);

ModalContent.displayName = 'ModalContent';
