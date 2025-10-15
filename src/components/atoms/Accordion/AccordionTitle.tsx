'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { ChevronDown, Plus } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    iconType?: 'arrow' | 'plus';
    accordionIndex?: number;
    activeIndex?: number;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number | null>>;
}

const AccordionTitle = forwardRef<HTMLDivElement, Props>(
    ({ iconType, accordionIndex = 0, activeIndex, className = '', setActiveIndex = () => {}, ...props }, ref) => {
        const icon = {
            arrow: (
                <ChevronDown
                    className={cn('size-5 transition-transform duration-300 will-change-transform', {
                        'rotate-180': accordionIndex === activeIndex,
                    })}
                />
            ),
            plus: (
                <Plus
                    className={cn('size-5 transition-transform duration-300 will-change-transform', {
                        'rotate-45': accordionIndex === activeIndex,
                    })}
                />
            ),
        };

        const toggleAccordion = () => {
            setActiveIndex((prevState) => (prevState !== accordionIndex ? accordionIndex : null));
        };

        return (
            <div
                ref={ref}
                {...props}
                onClick={toggleAccordion}
                className={`relative flex items-center justify-between w-full text-base p-2.5 sm:p-3 cursor-pointer transition-all duration-300 select-none ${className}`}
            >
                {props.children}
                {iconType && icon[iconType]}
            </div>
        );
    }
);

AccordionTitle.displayName = 'AccordionTitle';
export default AccordionTitle;
