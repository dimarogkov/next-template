export const ACCORDION_CODE = `import { AccordionWrapper } from './AccordionWrapper';
import { AccordionItem } from './AccordionItem';
import { AccordionTitle } from './AccordionTitle';
import { AccordionContent } from './AccordionContent';

export const Accordion = Object.assign(AccordionWrapper, {
  Item: AccordionItem,
  Title: AccordionTitle,
  Content: AccordionContent
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

AccordionWrapper.displayName = 'AccordionWrapper';`;

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
  SetStateAction
} from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  iconType?: 'arrow' | 'plus';
  accordionIndex?: number;
  activeIndex?: number;
  className?: string;
  setActiveIndex?: Dispatch<SetStateAction<number | null>>;
}

export const AccordionItem = forwardRef<HTMLDivElement, Props>(
  ({ iconType, accordionIndex = 0, activeIndex, className = '', setActiveIndex = () => {}, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn('border-border relative w-full overflow-hidden border-b last:border-b-0', className)}
      >
        {Children.map(props.children, (child) => {
          return isValidElement(child)
            ? cloneElement(child as ReactElement<any>, {
               iconType,
               accordionIndex,
               activeIndex,
               setActiveIndex
             })
            : child;
        })}
      </div>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';`;

export const ACCORDION_TITLE_CODE = `'use client';
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

AccordionTitle.displayName = 'AccordionTitle';`;

export const ACCORDION_CONTENT_CODE = `'use client';
import { forwardRef, ReactNode, RefAttributes } from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
  iconType?: 'arrow' | 'plus';
  accordionIndex?: number;
  activeIndex?: number;
  className?: string;
  classNameBlock?: string;
  children: ReactNode;
  setActiveIndex?: () => void;
}

export const AccordionContent = forwardRef<HTMLDivElement, Props>(
  (
    {
      iconType,
      accordionIndex = 0,
      activeIndex,
      className = '',
      classNameBlock = '',
      children,
      setActiveIndex,
      ...props
    },
    ref
  ) => {
    const animation: HTMLMotionProps<'div'> = {
      initial: { height: 0 },
      animate: { height: 'auto' },
      exit: { height: 0 },
      transition: { type: 'spring', duration: 0.4, bounce: 0 }
    };

    return (
      <AnimatePresence initial={false}>
        {accordionIndex === activeIndex && (
          <motion.div
            ref={ref}
            {...props}
            {...animation}
            className={cn('relative w-full text-base', className)}
          >
            <div className={cn('p-2.5 pt-0 sm:p-3 sm:pt-0', classNameBlock)}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

AccordionContent.displayName = 'AccordionContent';`;
