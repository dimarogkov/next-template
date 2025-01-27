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
import { EnumAccordionIcon } from '@/src/types/enums';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    iconType?: EnumAccordionIcon;
    className?: string;
}

const AccordionWrapper: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ iconType = EnumAccordionIcon.arrow, className = '', ...props }, ref) => {
        const [activeIndex, setActiveIndex] = useState<number | null>(null);

        return (
            <div ref={ref} {...props} className={`relative w-full rounded-md border border-gray ${className}`}>
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
