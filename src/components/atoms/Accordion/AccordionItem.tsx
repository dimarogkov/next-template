'use client';
import { Children, cloneElement, forwardRef, HTMLAttributes, isValidElement, ReactElement, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    iconType?: 'arrow' | 'plus';
    headingSize?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    accordionId?: string;
    accordionIndex?: number;
    activeIndexArr?: number[] | null;
    className?: string;
    toggleIndex?: (index: number) => void;
}

export const AccordionItem = forwardRef<HTMLDivElement, Props>(
    (
        {
            iconType,
            headingSize,
            accordionId,
            accordionIndex = 0,
            activeIndexArr,
            className = '',
            toggleIndex = () => {},
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                {...props}
                className={cn('border-border relative w-full overflow-hidden border-b last:border-b-0', className)}
            >
                {Children.map(props.children, (child) => {
                    return isValidElement(child)
                        ? cloneElement(child as ReactElement<Record<string, unknown>>, {
                              iconType,
                              headingSize,
                              accordionId,
                              accordionIndex,
                              activeIndexArr,
                              toggleIndex
                          })
                        : child;
                })}
            </div>
        );
    }
);

AccordionItem.displayName = 'AccordionItem';
