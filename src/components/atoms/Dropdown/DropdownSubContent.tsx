'use client';
import {
    Children,
    cloneElement,
    Dispatch,
    forwardRef,
    isValidElement,
    ReactElement,
    ReactNode,
    RefAttributes,
    SetStateAction,
} from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    isSubOpen?: boolean;
    className?: string;
    children?: ReactNode;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const DropdownSubContent = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, isSubOpen, className = '', children, setIsOpen = () => {}, ...props }, ref) => {
        const animation: HTMLMotionProps<'div'> = {
            initial: { scale: 0.95, opacity: 0 },
            animate: { scale: 1, opacity: 1, transition: { ease: [0.215, 0.61, 0.355, 1] } },
            exit: { scale: 0.95, opacity: 0 },
        };

        return (
            <AnimatePresence mode='wait'>
                {isSubOpen && (
                    <motion.div
                        ref={ref}
                        {...props}
                        {...animation}
                        className={`absolute top-[calc(100%+4px)] sm:-top-[1px] sm:left-[calc(100%+4px)] z-10 min-w-full max-w-[calc(100vw-32px)] w-max rounded-md p-1 border border-border bg-bg origin-top-left will-change-transform ${className}`}
                    >
                        {Children.map(children, (child) => {
                            return isValidElement(child)
                                ? cloneElement(child as ReactElement, { isOpen, setIsOpen })
                                : child;
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);

DropdownSubContent.displayName = 'DropdownSubContent';
export default DropdownSubContent;
