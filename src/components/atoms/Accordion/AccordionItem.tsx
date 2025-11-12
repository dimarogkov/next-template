'use client';
import {
    Children,
    cloneElement,
    Dispatch,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    SetStateAction,
} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    iconType?: 'arrow' | 'plus';
    accordionIndex?: number;
    activeIndex?: number;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number | null>>;
}

const AccordionItem = forwardRef<HTMLDivElement, Props>(
    ({ iconType, accordionIndex = 0, activeIndex, className = '', setActiveIndex = () => {}, ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                className={`relative w-full border-b border-border last:border-b-0 overflow-hidden ${className}`}
            >
                {Children.map(props.children, (child) => {
                    return isValidElement(child)
                        ? cloneElement(child as ReactElement, {
                              iconType,
                              accordionIndex,
                              activeIndex,
                              setActiveIndex,
                          })
                        : child;
                })}
            </div>
        );
    }
);

AccordionItem.displayName = 'AccordionItem';
export default AccordionItem;
