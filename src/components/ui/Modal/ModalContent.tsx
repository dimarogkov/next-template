'use client';
import { Dispatch, FC, forwardRef, ReactNode, RefAttributes, SetStateAction } from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import ModalLayer from './ModalLayer';
import ModalClose from './ModalClose';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    children: ReactNode;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const ModalContent: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, children, className = '', setIsOpen = () => {}, ...props }, ref) => {
        const animation: HTMLMotionProps<'div'> = {
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 0.3, ease: [0.215, 0.61, 0.355, 1] } },
            exit: { opacity: 0 },
        };

        const animationPopup: HTMLMotionProps<'div'> = {
            initial: { y: 20, opacity: 0 },
            animate: { y: 0, opacity: 1, transition: { duration: 0.3, ease: [0.215, 0.61, 0.355, 1] } },
            exit: { y: 20, opacity: 0 },
        };

        return (
            <AnimatePresence mode='wait'>
                {isOpen && (
                    <motion.div
                        {...animation}
                        className='fixed z-20 top-0 left-0 flex items-center justify-center w-full h-full'
                    >
                        <ModalLayer setIsOpen={setIsOpen} />

                        <motion.div
                            ref={ref}
                            {...props}
                            {...animationPopup}
                            className={`relative md:w-[600px] max-w-[calc(100%-32px)] rounded-md bg-white ${className}`}
                        >
                            <ModalClose onClick={() => setIsOpen(false)} />
                            {children}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);

ModalContent.displayName = 'ModalContent';
export default ModalContent;
