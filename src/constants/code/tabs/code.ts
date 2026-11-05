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
  useId,
  useState
} from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  defaultActiveIndex?: number;
  activeIndex?: number;
  hasAnimation?: boolean;
  className?: string;
  onActiveIndexChange?: (index: number) => void;
}

export const TabsWrapper = forwardRef<HTMLDivElement, Props>(
  (
    { defaultActiveIndex = 0, activeIndex, hasAnimation = false, className = '', onActiveIndexChange, ...props },
    ref
  ) => {
    const isControlled = activeIndex !== undefined;
    const [internalActiveIndex, setInternalActiveIndex] = useState(defaultActiveIndex);
    const resolvedActiveIndex = isControlled ? activeIndex : internalActiveIndex;
    const tabsId = useId();

    const handleActiveIndexChange = (index: number) => {
      if (!isControlled) {
        setInternalActiveIndex(index);
      }

      onActiveIndexChange?.(index);
    };

    return (
      <div ref={ref} {...props} className={cn('border-border relative w-full rounded-md border', className)}>
        {Children.map(props.children, (child) => {
          return isValidElement(child)
            ? cloneElement(child as ReactElement<Record<string, unknown>>, {
               tabsId,
               hasAnimation,
               activeIndex: resolvedActiveIndex,
               setActiveIndex: handleActiveIndexChange
             })
            : child;
        })}
      </div>
    );
  }
);

TabsWrapper.displayName = 'TabsWrapper';`;

export const TABS_LIST_CODE = `'use client';
import { Children, cloneElement, forwardRef, HTMLAttributes, isValidElement, ReactElement, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLUListElement>, RefAttributes<HTMLUListElement> {
  tabsId?: string;
  hasAnimation?: boolean;
  activeIndex?: number;
  className?: string;
  setActiveIndex?: (index: number) => void;
}

export const TabsList = forwardRef<HTMLUListElement, Props>(
  ({ tabsId, hasAnimation, activeIndex, className = '', setActiveIndex, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        {...props}
        role="tablist"
        className={cn('border-border relative flex w-full border-b', className)}
      >
        {Children.map(props.children, (child, index) => {
          return isValidElement(child)
            ? cloneElement(child as ReactElement<Record<string, unknown>>, {
               tabsId,
               index,
               hasAnimation,
               activeIndex,
               id: \`\${tabsId}-tab-\${index}\`,
               'aria-controls': \`\${tabsId}-panel-\${index}\`,
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
import { forwardRef, KeyboardEvent, LiHTMLAttributes, RefAttributes } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

interface Props extends LiHTMLAttributes<HTMLLIElement>, RefAttributes<HTMLLIElement> {
  tabsId?: string;
  hasAnimation?: boolean;
  index?: number;
  activeIndex?: number;
  disabled?: boolean;
  className?: string;
  setActiveIndex?: (index: number) => void;
}

export const TabsTab = forwardRef<HTMLLIElement, Props>(
  ({ tabsId, hasAnimation, index = 0, activeIndex, disabled, className = '', setActiveIndex, ...props }, ref) => {
    const isActive = index === activeIndex;

    const selectTab = () => {
      if (disabled) return;
      setActiveIndex?.(index);
    };

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
        tabIndex={disabled ? -1 : 0}
        aria-selected={isActive}
        aria-disabled={disabled || undefined}
        onClick={selectTab}
        onKeyDown={onKeyDown}
        className={cn(
          'border-border relative w-full cursor-pointer border-r px-2.5 py-1.5 text-center text-base last:border-none sm:px-3',
          className,
          {
            'transition-colors duration-200': hasAnimation,
            'pointer-events-none opacity-60': disabled,
            'text-title': isActive
          }
        )}
      >
        {props.children}

        {isActive && (
          <>
            {hasAnimation ? (
              <motion.div
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
import { Children, cloneElement, forwardRef, HTMLAttributes, isValidElement, ReactElement, RefAttributes } from 'react';
import { AnimatePresence } from 'framer-motion';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  tabsId?: string;
  hasAnimation?: boolean;
  activeIndex?: number;
  className?: string;
  setActiveIndex?: (index: number) => void;
}

export const TabsPanels = forwardRef<HTMLDivElement, Props>(
  ({ tabsId, hasAnimation, activeIndex, className = '', setActiveIndex, ...props }, ref) => {
    const childrenToRender = Children.map(props.children, (child, index) => {
      if (index === activeIndex) {
        return isValidElement(child)
          ? cloneElement(child as ReactElement<Record<string, unknown>>, {
             tabsId,
             hasAnimation,
             id: \`\${tabsId}-panel-\${index}\`,
             'aria-labelledby': \`\${tabsId}-tab-\${index}\`
           })
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
  tabsId?: string;
  hasAnimation?: boolean;
  className?: string;
}

export const TabsPanel = forwardRef<HTMLDivElement, Props>(
  ({ tabsId, hasAnimation, className = '', ...props }, ref) => {
    const animation: HTMLMotionProps<'div'> = {
      initial: { y: 8, opacity: 0 },
      animate: { y: 0, opacity: 1, transition: { duration: 0.2 } },
      exit: { y: -8, opacity: 0 }
    };

    return (
      <div
        ref={ref}
        {...props}
        role="tabpanel"
        tabIndex={0}
        className={cn('relative w-full p-3 text-base sm:p-4', className)}
      >
        {hasAnimation ? <motion.div {...animation}>{props.children}</motion.div> : <div>{props.children}</div>}
      </div>
    );
  }
);

TabsPanel.displayName = 'TabsPanel';`;
