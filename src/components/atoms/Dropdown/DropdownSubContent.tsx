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
import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/react-dom';
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
        const { refs, x, y, strategy } = useFloating({
            open: isSubOpen,
            strategy: 'absolute',
            placement: 'right-start',
            middleware: [offset({ mainAxis: 4, crossAxis: -5 }), flip(), shift({ padding: 8 })],
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
                            'border-border bg-bg z-10 w-max max-w-[calc(100vw-32px)] rounded-md border p-1 will-change-transform',
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
