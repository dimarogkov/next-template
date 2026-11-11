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
import { autoUpdate, flip, offset, shift, size, useFloating } from '@floating-ui/react-dom';
import { useMediaQuery } from '@hooks';
import { assignRefs } from '@utils';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    triggerElement?: HTMLElement | null;
    isOpen?: boolean;
    subTriggerElement?: HTMLElement | null;
    isSubOpen?: boolean;
    className?: string;
    children?: ReactNode;
    setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSubTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
    setIsSubOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdownSubContent = forwardRef<HTMLDivElement, Props>(
    (
        {
            triggerElement,
            isOpen,
            subTriggerElement,
            isSubOpen,
            className = '',
            children,
            setTriggerElement,
            setIsOpen,
            setSubTriggerElement,
            setIsSubOpen,
            ...props
        },
        ref
    ) => {
        const isDesktop = useMediaQuery('(min-width: 640px)');

        const { refs, x, y, strategy } = useFloating({
            open: isSubOpen,
            strategy: 'absolute',
            placement: isDesktop ? 'right-start' : 'bottom-start',
            middleware: [
                offset(isDesktop ? { mainAxis: 4, crossAxis: -5 } : 4),
                flip(),
                shift({ padding: 8 }),
                size({
                    apply({ rects, elements }) {
                        elements.floating.style.setProperty(
                            '--dropdown-subtrigger-width',
                            `${rects.reference.width}px`
                        );
                    }
                })
            ],
            elements: { reference: subTriggerElement },
            whileElementsMounted: autoUpdate
        });

        const setRefs = assignRefs<HTMLDivElement>(ref, refs.setFloating);

        const animation: HTMLMotionProps<'div'> = {
            initial: { scale: 0.95, opacity: 0 },
            animate: { scale: 1, opacity: 1, transition: { ease: [0.215, 0.61, 0.355, 1] } },
            exit: { scale: 0.95, opacity: 0 }
        };

        return (
            <AnimatePresence mode="wait">
                {isSubOpen && (
                    <motion.div
                        ref={setRefs}
                        {...props}
                        {...animation}
                        role="menu"
                        style={{ position: strategy, top: y ?? 0, left: x ?? 0, ...props.style }}
                        className={cn(
                            'border-border bg-bg z-10 w-(--dropdown-subtrigger-width) max-w-[calc(100vw-32px)] rounded-md border p-1 will-change-transform',
                            className
                        )}
                    >
                        {Children.map(children, (child) => {
                            return isValidElement(child)
                                ? cloneElement(child as ReactElement<Record<string, unknown>>, {
                                      triggerElement,
                                      isOpen,
                                      subTriggerElement,
                                      isSubOpen,
                                      setTriggerElement,
                                      setIsOpen,
                                      setSubTriggerElement,
                                      setIsSubOpen
                                  })
                                : child;
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);

DropdownSubContent.displayName = 'DropdownSubContent';
