'use client';
import { Dispatch, FC, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { EnumAccordionIcon } from '@/src/types/enums';
import { ChevronDown, Plus } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    iconType?: EnumAccordionIcon;
    accordionIndex?: number;
    activeIndex?: number;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number | null>>;
}

const AccordionTitle: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ iconType, accordionIndex = 0, activeIndex, className = '', setActiveIndex = () => {}, ...props }, ref) => {
        const icon = {
            [EnumAccordionIcon.arrow as string]: (
                <ChevronDown
                    className={cn('size-5 transition-transform duration-300 will-change-transform', {
                        'rotate-180': accordionIndex === activeIndex,
                    })}
                />
            ),
            [EnumAccordionIcon.plus as string]: (
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
                className={`relative flex items-center justify-between w-full text-base p-2.5 sm:p-3 cursor-pointer transition-all duration-300 ${className}`}
            >
                {props.children}
                {iconType && icon[iconType]}
            </div>
        );
    }
);

AccordionTitle.displayName = 'AccordionTitle';
export default AccordionTitle;
