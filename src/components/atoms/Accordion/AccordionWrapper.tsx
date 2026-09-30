'use client';
import {
    Children,
    cloneElement,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    useId,
    useState
} from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    type?: 'single' | 'multiple';
    iconType?: 'arrow' | 'plus';
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    defaultActiveIndex?: number[];
    className?: string;
}

export const AccordionWrapper = forwardRef<HTMLDivElement, Props>(
    (
        { type = 'single', iconType = 'arrow', headingLevel = 3, defaultActiveIndex = [], className = '', ...props },
        ref
    ) => {
        const [activeIndexArr, setActiveIndexArr] = useState(defaultActiveIndex);
        const accordionId = useId();

        const toggleIndex = (index: number) => {
            setActiveIndexArr((prev) => {
                const isActive = prev.includes(index);

                if (type === 'single') {
                    return isActive ? [] : [index];
                }

                return isActive ? prev.filter((item) => item !== index) : [...prev, index];
            });
        };

        return (
            <div ref={ref} {...props} className={cn('border-border relative w-full rounded-md border', className)}>
                {Children.map(props.children, (child, index) => {
                    return isValidElement(child)
                        ? cloneElement(child as ReactElement<Record<string, unknown>>, {
                              iconType,
                              headingLevel,
                              accordionId,
                              accordionIndex: index,
                              activeIndexArr,
                              toggleIndex
                          })
                        : child;
                })}
            </div>
        );
    }
);

AccordionWrapper.displayName = 'AccordionWrapper';
