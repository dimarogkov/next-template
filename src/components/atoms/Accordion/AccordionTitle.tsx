'use client';
import { Dispatch, forwardRef, HTMLAttributes, KeyboardEvent, RefAttributes, SetStateAction } from 'react';
import { ChevronDown, Plus } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    iconType?: 'arrow' | 'plus';
    accordionIndex?: number;
    activeIndex?: number;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number | null>>;
}

export const AccordionTitle = forwardRef<HTMLDivElement, Props>(
    ({ iconType, accordionIndex = 0, activeIndex, className = '', setActiveIndex = () => {}, ...props }, ref) => {
        const icon = {
            arrow: (
                <ChevronDown
                    className={cn('size-5 transition-transform duration-300 will-change-transform', {
                        'rotate-180': accordionIndex === activeIndex
                    })}
                />
            ),
            plus: (
                <Plus
                    className={cn('size-5 transition-transform duration-300 will-change-transform', {
                        'rotate-45': accordionIndex === activeIndex
                    })}
                />
            )
        };

        const toggleAccordion = () => {
            setActiveIndex((prevState) => (prevState !== accordionIndex ? accordionIndex : null));
        };

        const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleAccordion();
            }
        };

        return (
            <div
                ref={ref}
                {...props}
                role="button"
                tabIndex={0}
                onClick={toggleAccordion}
                onKeyDown={onKeyDown}
                className={cn(
                    'relative flex w-full cursor-pointer items-center justify-between p-2.5 text-base transition-all duration-300 select-none sm:p-3',
                    className
                )}
            >
                {props.children}
                {iconType && icon[iconType]}
            </div>
        );
    }
);

AccordionTitle.displayName = 'AccordionTitle';
