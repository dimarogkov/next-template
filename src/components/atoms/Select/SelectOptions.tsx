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
import { ISelectItem } from '@interfaces/SelectItem';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    isMultiple?: boolean;
    selectedItems?: ISelectItem[];
    className?: string;
    children?: ReactNode;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSelectedItems?: (item: ISelectItem) => void;
}

const SelectOptions = forwardRef<HTMLDivElement, Props>(
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
            exit: { scale: 0.95, opacity: 0 },
        };

        return (
            <AnimatePresence mode='wait'>
                {isOpen && (
                    <motion.div
                        ref={ref}
                        {...props}
                        {...animation}
                        className={`absolute top-[calc(100%+4px)] z-10 flex flex-col gap-1 min-w-full max-w-[calc(100vw-32px)] w-max max-h-[292px] overflow-auto rounded-md p-1 border border-border bg-bg will-change-transform ${className}`}
                    >
                        {Children.map(children, (child) => {
                            if (isValidElement(child)) {
                                return cloneElement(child as ReactElement, {
                                    isOpen,
                                    isMultiple,
                                    selectedItems,
                                    setIsOpen,
                                    setSelectedItems,
                                });
                            }

                            return child;
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);

SelectOptions.displayName = 'SelectOptions';
export default SelectOptions;
