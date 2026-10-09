'use client';
import {
    Dispatch,
    forwardRef,
    MutableRefObject,
    ReactNode,
    RefAttributes,
    SetStateAction,
    useCallback,
    useEffect,
    useRef
} from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { useEscapeKey, useFocusRestore, useFocusTrap } from '@hooks';
import { ModalLayer } from './ModalLayer';
import { ModalClose } from './ModalClose';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    disableCloseBtn?: boolean;
    children?: ReactNode;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    onOpenChange?: (isOpen: boolean) => void;
}

export const ModalContent = forwardRef<HTMLDivElement, Props>(
    (
        {
            isOpen,
            disableCloseBtn = false,
            children,
            className = '',
            setIsOpen = () => {},
            onOpenChange = () => {},
            ...props
        },
        ref
    ) => {
        const dialogRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            onOpenChange(!!isOpen);
        }, [isOpen, onOpenChange]);

        const setRefs = (node: HTMLDivElement | null) => {
            dialogRef.current = node;

            if (typeof ref === 'function') {
                ref(node);
            } else if (ref) {
                (ref as MutableRefObject<HTMLDivElement | null>).current = node;
            }
        };

        const closeModal = useCallback(() => setIsOpen(false), [setIsOpen]);

        useFocusRestore(dialogRef, isOpen);
        useEscapeKey(closeModal, isOpen);
        useFocusTrap(dialogRef, isOpen);

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
                            ref={setRefs}
                            {...props}
                            {...animationPopup}
                            role="dialog"
                            aria-modal="true"
                            tabIndex={-1}
                            className={cn(
                                'border-border bg-bg relative w-full max-w-[calc(100%-40px)] overflow-hidden rounded-md border outline-hidden will-change-transform md:w-150',
                                className
                            )}
                        >
                            {!disableCloseBtn && <ModalClose onClick={closeModal} />}
                            {children}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);

ModalContent.displayName = 'ModalContent';
