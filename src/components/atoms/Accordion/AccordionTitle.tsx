'use client';
import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { ChevronDown, Plus } from 'lucide-react';
import { Title } from '@components/atoms';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    iconType?: 'arrow' | 'plus';
    headingSize?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    accordionId?: string;
    accordionIndex?: number;
    activeIndexArr?: number[] | null;
    className?: string;
    toggleIndex?: (index: number) => void;
}

export const AccordionTitle = forwardRef<HTMLButtonElement, Props>(
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
        const id = `${accordionId}-trigger-${accordionIndex}`;
        const controls = `${accordionId}-panel-${accordionIndex}`;
        const isOpen = activeIndexArr?.includes(accordionIndex);

        const icon = {
            arrow: (
                <ChevronDown
                    className={cn('size-5 transition-transform duration-300 will-change-transform', {
                        'rotate-180': isOpen
                    })}
                />
            ),
            plus: (
                <Plus
                    className={cn('size-5 transition-transform duration-300 will-change-transform', {
                        'rotate-45': isOpen
                    })}
                />
            )
        };

        return (
            <Title size={headingSize} className="font-medium!">
                <button
                    id={id}
                    ref={ref}
                    {...props}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={controls}
                    onClick={() => toggleIndex(accordionIndex)}
                    className={cn(
                        'relative flex w-full cursor-pointer items-center justify-between p-2.5 text-base transition-all duration-300 select-none sm:p-3',
                        className
                    )}
                >
                    {props.children}
                    {iconType && icon[iconType]}
                </button>
            </Title>
        );
    }
);

AccordionTitle.displayName = 'AccordionTitle';
