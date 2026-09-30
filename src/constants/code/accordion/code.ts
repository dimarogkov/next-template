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

AccordionWrapper.displayName = 'AccordionWrapper';`;

export const ACCORDION_ITEM_CODE = `'use client';
import { Children, cloneElement, forwardRef, HTMLAttributes, isValidElement, ReactElement, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  iconType?: 'arrow' | 'plus';
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  accordionId?: string;
  accordionIndex?: number;
  activeIndexArr?: number[] | null;
  className?: string;
  toggleIndex?: (index: number) => void;
}

export const AccordionItem = forwardRef<HTMLDivElement, Props>(
  (
    {
      iconType,
      headingLevel,
      accordionId,
      accordionIndex = 0,
      activeIndexArr,
      className = '',
      toggleIndex = () => {},
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn('border-border relative w-full overflow-hidden border-b last:border-b-0', className)}
      >
        {Children.map(props.children, (child) => {
          return isValidElement(child)
            ? cloneElement(child as ReactElement<Record<string, unknown>>, {
               iconType,
               headingLevel,
               accordionId,
               accordionIndex,
               activeIndexArr,
               toggleIndex
             })
            : child;
        })}
      </div>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';`;

export const ACCORDION_TITLE_CODE = `'use client';
import { ElementType, forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { ChevronDown, Plus } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
  iconType?: 'arrow' | 'plus';
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
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
      headingLevel = 3,
      accordionId,
      accordionIndex = 0,
      activeIndexArr,
      className = '',
      toggleIndex = () => {},
      ...props
    },
    ref
  ) => {
    const id = \`\${accordionId}-trigger-\${accordionIndex}\`;
    const controls = \`\${accordionId}-panel-\${accordionIndex}\`;
    const isOpen = activeIndexArr?.includes(accordionIndex);
    const Heading = \`h\${headingLevel}\` as ElementType;

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
      <Heading>
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
      </Heading>
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
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  accordionId?: string;
  accordionIndex?: number;
  activeIndexArr?: number[] | null;
  className?: string;
  classNameBlock?: string;
  children: ReactNode;
  toggleIndex?: (index: number) => void;
}

export const AccordionContent = forwardRef<HTMLDivElement, Props>(
  (
    {
      iconType,
      headingLevel,
      accordionId,
      accordionIndex = 0,
      activeIndexArr,
      className = '',
      classNameBlock = '',
      children,
      toggleIndex,
      ...props
    },
    ref
  ) => {
    const id = \`\${accordionId}-panel-\${accordionIndex}\`;
    const labelledby = \`\${accordionId}-trigger-\${accordionIndex}\`;
    const isIndexExist = activeIndexArr?.includes(accordionIndex);

    const animation: HTMLMotionProps<'div'> = {
      initial: { height: 0 },
      animate: { height: 'auto' },
      exit: { height: 0 },
      transition: { type: 'spring', duration: 0.4, bounce: 0 }
    };

    return (
      <AnimatePresence initial={false}>
        {isIndexExist && (
          <motion.div
            id={id}
            ref={ref}
            {...props}
            {...animation}
            role="region"
            aria-labelledby={labelledby}
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
