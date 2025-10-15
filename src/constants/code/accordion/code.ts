export const ACCORDION_CODE = `import AccordionWrapper from './AccordionWrapper';
import AccordionItem from './AccordionItem';
import AccordionTitle from './AccordionTitle';
import AccordionContent from './AccordionContent';

export const Accordion = Object.assign(AccordionWrapper, {
    Item: AccordionItem,
    Title: AccordionTitle,
    Content: AccordionContent,
});`;

export const ACCORDION_WRAPPER_CODE = `'use client';
import {
    Children,
    cloneElement,
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

const AccordionWrapper = forwardRef<HTMLDivElement, Props>(
    ({ iconType = 'arrow', defaultActiveIndex = null, className = '', ...props }, ref) => {
        const [activeIndex, setActiveIndex] = useState<number | null>(defaultActiveIndex);

        return (
            <div ref={ref} {...props} className={\`relative w-full rounded-md border border-border \${className}\`}>
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
export default AccordionWrapper;`;

export const ACCORDION_ITEM_CODE = `'use client';
import {
    Children,
    cloneElement,
    Dispatch,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    SetStateAction,
} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    iconType?: 'arrow' | 'plus';
    accordionIndex?: number;
    activeIndex?: number;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number | null>>;
}

const AccordionItem = forwardRef<HTMLDivElement, Props>(
    ({ iconType, accordionIndex = 0, activeIndex, className = '', setActiveIndex = () => {}, ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                className={\`relative w-full border-b border-border last:border-b-0 overflow-hidden \${className}\`}
            >
                {Children.map(props.children, (child) => {
                    if (isValidElement(child)) {
                        return cloneElement(child as ReactElement, {
                            iconType,
                            accordionIndex,
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

AccordionItem.displayName = 'AccordionItem';
export default AccordionItem;`;

export const ACCORDION_TITLE_CODE = `'use client';
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
                className={\`relative flex items-center justify-between w-full text-base p-2.5 sm:p-3 cursor-pointer transition-all duration-300 select-none \${className}\`}
            >
                {props.children}
                {iconType && icon[iconType]}
            </div>
        );
    }
);

AccordionTitle.displayName = 'AccordionTitle';
export default AccordionTitle;`;

export const ACCORDION_CONTENT_CODE = `'use client';
import { forwardRef, ReactNode, RefAttributes } from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    iconType?: 'arrow' | 'plus';
    accordionIndex?: number;
    activeIndex?: number;
    className?: string;
    classNameBlock?: string;
    children: ReactNode;
    setActiveIndex?: () => void;
}

const AccordionContent = forwardRef<HTMLDivElement, Props>(
    (
        {
            iconType,
            accordionIndex = 0,
            activeIndex,
            className = '',
            classNameBlock = '',
            children,
            setActiveIndex = () => {},
            ...props
        },
        ref
    ) => {
        const animation: HTMLMotionProps<'div'> = {
            initial: { height: 0 },
            animate: { height: 'auto' },
            exit: { height: 0 },
            transition: { type: 'spring', duration: 0.4, bounce: 0 },
        };

        return (
            <AnimatePresence initial={false}>
                {accordionIndex === activeIndex && (
                    <motion.div
                        ref={ref}
                        {...props}
                        {...animation}
                        className={\`relative w-full text-base \${className}\`}
                    >
                        <div className={\`p-2.5 pt-0 sm:p-3 sm:pt-0 \${classNameBlock}\`}>{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);

AccordionContent.displayName = 'AccordionContent';
export default AccordionContent;`;
