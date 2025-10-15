'use client';
import { Dispatch, forwardRef, RefAttributes, SetStateAction } from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    align?: 'start' | 'end';
    position?: 'bottom' | 'left' | 'right' | 'top';
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const DropdownContent = forwardRef<HTMLDivElement, Props>(
    ({ align = 'start', position = 'bottom', isOpen, className = '', setIsOpen = () => {}, ...props }, ref) => {
        const isVerticalPosition = position === 'top' || position === 'bottom';
        const isHorizontalPosition = position === 'left' || position === 'right';

        const animation: HTMLMotionProps<'div'> = {
            initial: { scale: 0.95, opacity: 0 },
            animate: { scale: 1, opacity: 1, transition: { ease: [0.215, 0.61, 0.355, 1] } },
            exit: { scale: 0.95, opacity: 0 },
        };

        const dropdownContentStyle = {
            ...(position === 'top' && {
                bottom: 'calc(100% + 4px)',
                transformOrigin: 'bottom left',
            }),
            ...(position === 'right' && {
                left: 'calc(100% + 4px)',
                transformOrigin: 'top left',
            }),
            ...(position === 'bottom' && {
                top: 'calc(100% + 4px)',
                transformOrigin: 'top left',
            }),
            ...(position === 'left' && {
                right: 'calc(100% + 4px)',
                transformOrigin: 'top right',
            }),
        };

        return (
            <AnimatePresence mode='wait'>
                {isOpen && (
                    <motion.div
                        ref={ref}
                        {...props}
                        {...animation}
                        className={cn(
                            `absolute z-10 min-w-full max-w-[calc(100vw-32px)] w-max rounded-md p-1 border border-border bg-bg will-change-transform ${className}`,
                            {
                                'left-0': align === 'start' && isVerticalPosition,
                                'top-0': align === 'start' && isHorizontalPosition,
                                'right-0': align === 'end' && isVerticalPosition,
                                'bottom-0': align === 'end' && isHorizontalPosition,
                            }
                        )}
                        style={dropdownContentStyle}
                    >
                        {props.children}
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);

DropdownContent.displayName = 'DropdownContent';
export default DropdownContent;
