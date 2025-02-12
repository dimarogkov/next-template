'use client';
import { Dispatch, FC, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { EnumAccordionIcon } from '@/src/types/enums';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    iconType?: EnumAccordionIcon;
    accordionIndex?: number;
    activeIndex?: number;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number | null>>;
}

const AccordionContent: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ iconType, accordionIndex = 0, activeIndex, className = '', setActiveIndex = () => {}, ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                className={cn(
                    `relative grid w-full text-base px-2.5 sm:px-3 transition-all duration-300 ${className}`,
                    {
                        'grid-rows-[1fr] pb-2.5 sm:pb-3 opacity-100': accordionIndex === activeIndex,
                        'grid-rows-[0fr] pb-0 opacity-0': accordionIndex !== activeIndex,
                    }
                )}
            >
                <div className='overflow-hidden'>{props.children}</div>
            </div>
        );
    }
);

AccordionContent.displayName = 'AccordionContent';
export default AccordionContent;
