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
    useCallback,
    useEffect,
    useRef,
    useState
} from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { autoUpdate, flip, offset, shift, size, useFloating } from '@floating-ui/react-dom';
import { useEscapeKey, useFocusRestore } from '@hooks';
import { assignRefs } from '@utils';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    triggerElement?: HTMLElement | null;
    isOpen?: boolean;
    subTriggerElement?: HTMLElement | null;
    isSubOpen?: boolean;
    align?: 'start' | 'end';
    position?: 'bottom' | 'left' | 'right' | 'top';
    className?: string;
    children?: ReactNode;
    setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSubTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
    setIsSubOpen?: Dispatch<SetStateAction<boolean>>;
}

const PLACEMENTS = {
    bottom: { start: 'bottom-start', end: 'bottom-end' },
    top: { start: 'top-start', end: 'top-end' },
    left: { start: 'left-start', end: 'left-end' },
    right: { start: 'right-start', end: 'right-end' }
} as const;

export const DropdownContent = forwardRef<HTMLDivElement, Props>(
    (
        {
            triggerElement,
            isOpen,
            subTriggerElement,
            isSubOpen,
            align = 'start',
            position = 'bottom',
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
        const contentRef = useRef<HTMLDivElement>(null);
        const [isMounted, setIsMounted] = useState(false);

        const { refs, x, y, strategy } = useFloating({
            open: isOpen,
            strategy: 'fixed',
            placement: PLACEMENTS[position][align],
            middleware: [
                offset(4),
                flip(),
                shift({ padding: 8 }),
                size({
                    apply({ rects, elements }) {
                        elements.floating.style.setProperty('--dropdown-trigger-width', `${rects.reference.width}px`);
                    }
                })
            ],
            elements: { reference: triggerElement },
            whileElementsMounted: autoUpdate
        });

        useEffect(() => {
            setIsMounted(true);
        }, []);

        const setRefs = assignRefs<HTMLDivElement>(ref, contentRef, refs.setFloating);
        const closeDropdown = useCallback(() => setIsOpen?.(false), [setIsOpen]);

        useEscapeKey(closeDropdown, isOpen);
        useFocusRestore(contentRef, isOpen);

        const animation: HTMLMotionProps<'div'> = {
            initial: { scale: 0.95, opacity: 0 },
            animate: { scale: 1, opacity: 1, transition: { ease: [0.215, 0.61, 0.355, 1] } },
            exit: { scale: 0.95, opacity: 0 }
        };

        return !isMounted
            ? null
            : createPortal(
                  <AnimatePresence mode="wait">
                      {isOpen && (
                          <motion.div
                              ref={setRefs}
                              {...props}
                              {...animation}
                              role="menu"
                              tabIndex={-1}
                              data-dropdown-portal
                              style={{ position: strategy, top: y ?? 0, left: x ?? 0, ...props.style }}
                              className={cn(
                                  'border-border bg-bg z-10 w-(--dropdown-trigger-width) max-w-[calc(100vw-32px)] rounded-md border p-1 outline-hidden will-change-transform',
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
                  </AnimatePresence>,
                  document.body
              );
    }
);

DropdownContent.displayName = 'DropdownContent';
