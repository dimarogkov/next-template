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

interface Props extends HTMLAttributes<HTMLUListElement>, RefAttributes<HTMLUListElement> {
    hasAnimation?: boolean;
    activeIndex?: number;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number>>;
}

export const TabsList = forwardRef<HTMLUListElement, Props>(
    ({ hasAnimation, activeIndex, className = '', setActiveIndex = () => {}, ...props }, ref) => {
        return (
            <ul ref={ref} {...props} className={cn('border-border relative flex w-full border-b', className)}>
                {Children.map(props.children, (child, index) => {
                    return isValidElement(child)
                        ? cloneElement(child as ReactElement<Record<string, unknown>>, {
                              hasAnimation,
                              tabIndex: index,
                              activeIndex,
                              setActiveIndex
                          })
                        : child;
                })}
            </ul>
        );
    }
);

TabsList.displayName = 'TabsList';
