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
    SetStateAction
} from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    isSubOpen?: boolean;
    className?: string;
    children?: ReactNode;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdownSubContent = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, isSubOpen, className = '', children, setIsOpen = () => {}, ...props }, ref) => {
        const animation: HTMLMotionProps<'div'> = {
            initial: { scale: 0.95, opacity: 0 },
            animate: { scale: 1, opacity: 1, transition: { ease: [0.215, 0.61, 0.355, 1] } },
            exit: { scale: 0.95, opacity: 0 }
        };

        return (
            <AnimatePresence mode="wait">
                {isSubOpen && (
                    <motion.div
                        ref={ref}
                        {...props}
                        {...animation}
                        className={cn(
                            'border-border bg-bg absolute top-[calc(100%+4px)] z-10 w-max max-w-[calc(100vw-32px)] min-w-full origin-top-left rounded-md border p-1 will-change-transform sm:-top-px sm:left-[calc(100%+4px)]',
                            className
                        )}
                    >
                        {Children.map(children, (child) => {
                            return isValidElement(child)
                                ? cloneElement(child as ReactElement<Record<string, unknown>>, { isOpen, setIsOpen })
                                : child;
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);

DropdownSubContent.displayName = 'DropdownSubContent';
