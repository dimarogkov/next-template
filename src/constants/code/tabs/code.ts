export const TABS_CODE = `import { TabsWrapper } from './TabsWrapper';
import { TabsList } from './TabsList';
import { TabsTab } from './TabsTab';
import { TabsPanels } from './TabsPanels';
import { TabsPanel } from './TabsPanel';

export const Tabs = Object.assign(TabsWrapper, {
  TabList: TabsList,
  Tab: TabsTab,
  Panels: TabsPanels,
  Panel: TabsPanel
});`;

export const TABS_WRAPPER_CODE = `'use client';
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
  defaultActiveIndex?: number;
  hasAnimation?: boolean;
  className?: string;
}

export const TabsWrapper = forwardRef<HTMLDivElement, Props>(
  ({ defaultActiveIndex = 0, hasAnimation = false, className = '', ...props }, ref) => {
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

    return (
      <div ref={ref} {...props} className={cn('border-border relative w-full rounded-md border', className)}>
        {Children.map(props.children, (child) => {
          return isValidElement(child)
            ? cloneElement(child as ReactElement<Record<string, unknown>>, {
               hasAnimation,
               activeIndex,
               setActiveIndex
             })
            : child;
        })}
      </div>
    );
  }
);

TabsWrapper.displayName = 'TabsWrapper';`;

export const TABS_LIST_CODE = `'use client';
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

interface Props extends HTMLAttributes<HTMLUListElement>, RefAttributes<HTMLUListElement> {
  hasAnimation?: boolean;
  activeIndex?: number;
  className?: string;
  setActiveIndex?: Dispatch<SetStateAction<number>>;
}

export const TabsList = forwardRef<HTMLUListElement, Props>(
  ({ hasAnimation, activeIndex, className = '', setActiveIndex = () => {}, ...props }, ref) => {
    return (
      <ul ref={ref} {...props} className={cn('border-border relative flex w-full border-b', className)}>
        {Children.map(props.children, (child, index) => {
          return isValidElement(child)
            ? cloneElement(child as ReactElement<Record<string, unknown>>, {
               hasAnimation,
               tabIndex: index,
               activeIndex,
               setActiveIndex
             })
            : child;
        })}
      </ul>
    );
  }
);

TabsList.displayName = 'TabsList';`;

export const TABS_TAB_CODE = `'use client';
import { Dispatch, forwardRef, KeyboardEvent, LiHTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

interface Props extends LiHTMLAttributes<HTMLLIElement>, RefAttributes<HTMLLIElement> {
  hasAnimation?: boolean;
  tabIndex?: number;
  activeIndex?: number;
  className?: string;
  setActiveIndex?: Dispatch<SetStateAction<number>>;
}

export const TabsTab = forwardRef<HTMLLIElement, Props>(
  ({ hasAnimation, tabIndex = 0, activeIndex, className = '', setActiveIndex = () => {}, ...props }, ref) => {
    const selectTab = () => setActiveIndex(tabIndex);

    const onKeyDown = (e: KeyboardEvent<HTMLLIElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectTab();
      }
    };

    return (
      <li
        ref={ref}
        {...props}
        role="tab"
        tabIndex={0}
        aria-selected={tabIndex === activeIndex}
        onClick={selectTab}
        onKeyDown={onKeyDown}
        className={cn(
          'border-border relative w-full cursor-pointer border-r px-2.5 py-1.5 text-center text-base last:border-none sm:px-3',
          className,
          {
            'transition-colors duration-200': hasAnimation,
            'text-title': tabIndex === activeIndex
          }
        )}
      >
        {props.children}

        {tabIndex === activeIndex && (
          <>
            {hasAnimation ? (
              <motion.div
                id="underline"
                layoutId="underline"
                className="bg-title absolute -bottom-px left-0 h-0.5 w-full"
              />
            ) : (
              <div className="bg-title absolute -bottom-px left-0 h-0.5 w-full" />
            )}
          </>
        )}
      </li>
    );
  }
);

TabsTab.displayName = 'TabsTab';`;

export const TABS_PANELS_CODE = `'use client';
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
import { AnimatePresence } from 'framer-motion';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  hasAnimation?: boolean;
  activeIndex?: number;
  className?: string;
  setActiveIndex?: Dispatch<SetStateAction<number>>;
}

export const TabsPanels = forwardRef<HTMLDivElement, Props>(
  ({ hasAnimation, activeIndex, className = '', setActiveIndex, ...props }, ref) => {
    const childrenToRender = Children.map(props.children, (child, index) => {
      if (index === activeIndex) {
        return isValidElement(child)
          ? cloneElement(child as ReactElement<Record<string, unknown>>, { hasAnimation })
          : child;
      }
    });

    return (
      <div ref={ref} {...props} className={cn('relative w-full', className)}>
        {hasAnimation ? (
          <AnimatePresence mode="wait" initial={false}>
            {childrenToRender}
          </AnimatePresence>
        ) : (
          <>{childrenToRender}</>
        )}
      </div>
    );
  }
);

TabsPanels.displayName = 'TabsPanels';`;

export const TABS_PANEL_CODE = `'use client';
import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  hasAnimation?: boolean;
  className?: string;
}

export const TabsPanel = forwardRef<HTMLDivElement, Props>(({ hasAnimation, className = '', ...props }, ref) => {
  const animation: HTMLMotionProps<'div'> = {
    initial: { y: 8, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.2 } },
    exit: { y: -8, opacity: 0 }
  };

  return (
    <div ref={ref} {...props} className={cn('relative w-full p-3 text-base sm:p-4', className)}>
      {hasAnimation ? <motion.div {...animation}>{props.children}</motion.div> : <div>{props.children}</div>}
    </div>
  );
});

TabsPanel.displayName = 'TabsPanel';`;
