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
import { ISelectItem } from '@interfaces/SelectItem';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    isMultiple?: boolean;
    selectedItems?: ISelectItem[];
    className?: string;
    children?: ReactNode;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSelectedItems?: (item: ISelectItem) => void;
}

export const SelectOptions = forwardRef<HTMLDivElement, Props>(
    (
        {
            isOpen,
            isMultiple,
            selectedItems,
            setIsOpen = () => {},
            setSelectedItems = () => {},
            className = '',
            children,
            ...props
        },
        ref
    ) => {
        const animation: HTMLMotionProps<'div'> = {
            initial: { scale: 0.95, opacity: 0 },
            animate: { scale: 1, opacity: 1, transition: { ease: [0.215, 0.61, 0.355, 1] } },
            exit: { scale: 0.95, opacity: 0 }
        };

        return (
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        ref={ref}
                        {...props}
                        {...animation}
                        className={cn(
                            'border-border bg-bg absolute top-[calc(100%+4px)] z-10 flex max-h-73 w-max max-w-[calc(100vw-32px)] min-w-full flex-col gap-1 overflow-auto rounded-md border p-1 will-change-transform',
                            className
                        )}
                    >
                        {Children.map(children, (child) => {
                            return isValidElement(child)
                                ? cloneElement(child as ReactElement<any>, {
                                      isOpen,
                                      isMultiple,
                                      selectedItems,
                                      setIsOpen,
                                      setSelectedItems
                                  })
                                : child;
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);

SelectOptions.displayName = 'SelectOptions';
