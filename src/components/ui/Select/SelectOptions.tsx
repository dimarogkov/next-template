'use client';
import {
    Children,
    cloneElement,
    Dispatch,
    FC,
    forwardRef,
    isValidElement,
    ReactElement,
    ReactNode,
    RefAttributes,
    SetStateAction,
} from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { ISelectItem } from '@/src/types/interfaces/SelectItem';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    selectedItem?: ISelectItem;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSelectedItem?: Dispatch<SetStateAction<ISelectItem>>;
    children?: ReactNode;
}

const SelectOptions: FC<Props> = forwardRef<HTMLDivElement, Props>(
    (
        { isOpen, selectedItem, setIsOpen = () => {}, setSelectedItem = () => {}, className = '', children, ...props },
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
                        className={`absolute top-[calc(100%+4px)] z-10 flex flex-col gap-1 min-w-full max-w-[calc(100vw-32px)] w-max rounded-md p-1 border border-border bg-bg will-change-transform ${className}`}
                    >
                        {Children.map(children, (child) => {
                            if (isValidElement(child)) {
                                return cloneElement(child as ReactElement, {
                                    isOpen,
                                    selectedItem,
                                    setIsOpen,
                                    setSelectedItem,
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
