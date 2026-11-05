'use client';
import {
    Children,
    cloneElement,
    Dispatch,
    forwardRef,
    isValidElement,
    KeyboardEvent,
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
import { ISelectItem } from '@interfaces/SelectItem';
import { assignRefs } from '@utils';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    triggerElement?: HTMLElement | null;
    isOpen?: boolean;
    isMultiple?: boolean;
    selectedItems?: ISelectItem[];
    disabled?: boolean;
    className?: string;
    children?: ReactNode;
    setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSelectedItems?: (item: ISelectItem) => void;
}

export const SelectOptions = forwardRef<HTMLDivElement, Props>(
    (
        {
            triggerElement,
            isOpen,
            isMultiple,
            selectedItems,
            disabled,
            className = '',
            children,
            setTriggerElement,
            setIsOpen,
            setSelectedItems,
            ...props
        },
        ref
    ) => {
        const optionsRef = useRef<HTMLDivElement>(null);
        const [isMounted, setIsMounted] = useState(false);

        const { refs, x, y, strategy } = useFloating({
            open: isOpen,
            strategy: 'fixed',
            placement: 'bottom-start',
            middleware: [
                offset(4),
                flip(),
                shift({ padding: 8 }),
                size({
                    apply({ rects, elements }) {
                        Object.assign(elements.floating.style, { width: `${rects.reference.width}px` });
                    }
                })
            ],
            elements: { reference: triggerElement },
            whileElementsMounted: autoUpdate
        });

        useEffect(() => {
            setIsMounted(true);
        }, []);

        const setRefs = assignRefs<HTMLDivElement>(ref, optionsRef, refs.setFloating);
        const closeOptions = useCallback(() => setIsOpen?.(false), [setIsOpen]);

        useEscapeKey(closeOptions, isOpen);
        useFocusRestore(optionsRef, isOpen);

        const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
            if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') {
                return;
            }

            e.preventDefault();

            const options = Array.from(
                optionsRef.current?.querySelectorAll<HTMLElement>('[role="option"]:not([aria-disabled="true"])') ?? []
            );

            const currentIndex = options.indexOf(document.activeElement as HTMLElement);

            if (currentIndex === -1) {
                options[e.key === 'ArrowDown' ? 0 : options.length - 1]?.focus();
                return;
            }

            const nextIndex =
                e.key === 'ArrowDown'
                    ? (currentIndex + 1) % options.length
                    : (currentIndex - 1 + options.length) % options.length;

            options[nextIndex]?.focus();
        };

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
                              role="listbox"
                              tabIndex={-1}
                              aria-multiselectable={isMultiple}
                              data-select-portal
                              onKeyDown={handleKeyDown}
                              style={{ position: strategy, top: y ?? 0, left: x ?? 0, ...props.style }}
                              className={cn(
                                  'border-border bg-bg z-10 flex max-h-73 flex-col gap-1 overflow-auto rounded-md border p-1 will-change-transform',
                                  className
                              )}
                          >
                              {Children.map(children, (child) => {
                                  return isValidElement(child)
                                      ? cloneElement(child as ReactElement<Record<string, unknown>>, {
                                            triggerElement,
                                            isOpen,
                                            isMultiple,
                                            selectedItems,
                                            disabled: disabled || (child.props as { disabled?: boolean }).disabled,
                                            setTriggerElement,
                                            setIsOpen,
                                            setSelectedItems
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

SelectOptions.displayName = 'SelectOptions';
