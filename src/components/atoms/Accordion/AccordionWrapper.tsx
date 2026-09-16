'use client';
import {
    Children,
    cloneElement,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    useState
} from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    iconType?: 'arrow' | 'plus';
    defaultActiveIndex?: number | null;
    className?: string;
}

export const AccordionWrapper = forwardRef<HTMLDivElement, Props>(
    ({ iconType = 'arrow', defaultActiveIndex = null, className = '', ...props }, ref) => {
        const [activeIndex, setActiveIndex] = useState<number | null>(defaultActiveIndex);

        return (
            <div ref={ref} {...props} className={cn('border-border relative w-full rounded-md border', className)}>
                {Children.map(props.children, (child, index) => {
                    return isValidElement(child)
                        ? cloneElement(child as ReactElement<any>, {
                              iconType,
                              accordionIndex: index,
                              activeIndex,
                              setActiveIndex
                          })
                        : child;
                })}
            </div>
        );
    }
);

AccordionWrapper.displayName = 'AccordionWrapper';
