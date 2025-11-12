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

interface Props extends HTMLAttributes<HTMLUListElement>, RefAttributes<HTMLUListElement> {
    hasAnimation?: boolean;
    activeIndex?: number;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number>>;
}

const TabsList = forwardRef<HTMLUListElement, Props>(
    ({ hasAnimation, activeIndex, className = '', setActiveIndex = () => {}, ...props }, ref) => {
        return (
            <ul ref={ref} {...props} className={`relative flex w-full border-b border-border ${className}`}>
                {Children.map(props.children, (child, index) => {
                    return isValidElement(child)
                        ? cloneElement(child as ReactElement, {
                              hasAnimation,
                              tabIndex: index,
                              activeIndex,
                              setActiveIndex,
                          })
                        : child;
                })}
            </ul>
        );
    }
);

TabsList.displayName = 'TabsList';
export default TabsList;
