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
    SetStateAction
} from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    iconType?: 'arrow' | 'plus';
    accordionIndex?: number;
    activeIndex?: number;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number | null>>;
}

export const AccordionItem = forwardRef<HTMLDivElement, Props>(
    ({ iconType, accordionIndex = 0, activeIndex, className = '', setActiveIndex = () => {}, ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                className={cn('border-border relative w-full overflow-hidden border-b last:border-b-0', className)}
            >
                {Children.map(props.children, (child) => {
                    return isValidElement(child)
                        ? cloneElement(child as ReactElement<any>, {
                              iconType,
                              accordionIndex,
                              activeIndex,
                              setActiveIndex
                          })
                        : child;
                })}
            </div>
        );
    }
);

AccordionItem.displayName = 'AccordionItem';
