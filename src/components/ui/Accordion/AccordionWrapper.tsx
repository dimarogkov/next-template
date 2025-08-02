'use client';
import {
    Children,
    cloneElement,
    FC,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    useState,
} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    iconType?: 'arrow' | 'plus';
    defaultActiveIndex?: number | null;
    className?: string;
}

const AccordionWrapper: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ iconType = 'arrow', defaultActiveIndex = null, className = '', ...props }, ref) => {
        const [activeIndex, setActiveIndex] = useState<number | null>(defaultActiveIndex);

        return (
            <div ref={ref} {...props} className={`relative w-full rounded-md border border-border ${className}`}>
                {Children.map(props.children, (child, index) => {
                    if (isValidElement(child)) {
                        return cloneElement(child as ReactElement, {
                            iconType,
                            accordionIndex: index,
                            activeIndex,
                            setActiveIndex,
                        });
                    }

                    return child;
                })}
            </div>
        );
    }
);

AccordionWrapper.displayName = 'AccordionWrapper';
export default AccordionWrapper;
