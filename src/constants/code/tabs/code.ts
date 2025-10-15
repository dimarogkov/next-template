export const TABS_CODE = `import TabsWrapper from './TabsWrapper';
import TabsList from './TabsList';
import TabsTab from './TabsTab';
import TabsPanels from './TabsPanels';
import TabsPanel from './TabsPanel';

export const Tabs = Object.assign(TabsWrapper, {
    TabList: TabsList,
    Tab: TabsTab,
    Panels: TabsPanels,
    Panel: TabsPanel,
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
    useState,
} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    defaultActiveIndex?: number;
    hasAnimation?: boolean;
    className?: string;
}

const TabsWrapper = forwardRef<HTMLDivElement, Props>(
    ({ defaultActiveIndex = 0, hasAnimation = false, className = '', ...props }, ref) => {
        const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

        return (
            <div ref={ref} {...props} className={\`relative w-full rounded-md border border-border \${className}\`}>
                {Children.map(props.children, (child) => {
                    if (isValidElement(child)) {
                        return cloneElement(child as ReactElement, { hasAnimation, activeIndex, setActiveIndex });
                    }

                    return child;
                })}
            </div>
        );
    }
);

TabsWrapper.displayName = 'TabsWrapper';
export default TabsWrapper;`;

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
    SetStateAction,
} from 'react';

interface Props extends HTMLAttributes<HTMLUListElement>, RefAttributes<HTMLUListElement> {
    hasAnimation?: boolean;
    activeIndex?: number;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number>>;
}

const TabsList = forwardRef<HTMLUListElement, Props>(
    ({ hasAnimation, activeIndex, className = '', setActiveIndex = () => {}, ...props }, ref) => {
        return (
            <ul ref={ref} {...props} className={\`relative flex w-full border-b border-border \${className}\`}>
                {Children.map(props.children, (child, index) => {
                    if (isValidElement(child)) {
                        return cloneElement(child as ReactElement, {
                            hasAnimation,
                            tabIndex: index,
                            activeIndex,
                            setActiveIndex,
                        });
                    }

                    return child;
                })}
            </ul>
        );
    }
);

TabsList.displayName = 'TabsList';
export default TabsList;`;

export const TABS_TAB_CODE = `'use client';
import { Dispatch, forwardRef, LiHTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

interface Props extends LiHTMLAttributes<HTMLLIElement>, RefAttributes<HTMLLIElement> {
    hasAnimation?: boolean;
    tabIndex?: number;
    activeIndex?: number;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number>>;
}

const TabsTab = forwardRef<HTMLLIElement, Props>(
    ({ hasAnimation, tabIndex = 0, activeIndex, className = '', setActiveIndex = () => {}, ...props }, ref) => {
        return (
            <li
                ref={ref}
                {...props}
                onClick={() => setActiveIndex(tabIndex)}
                className={cn(
                    \`relative w-full text-center text-base px-2.5 sm:px-3 py-1.5 border-r border-border last:border-none cursor-pointer \${className}\`,
                    {
                        'transition-colors duration-200': hasAnimation,
                        'text-title': tabIndex === activeIndex,
                    }
                )}
            >
                {props.children}

                {tabIndex === activeIndex && (
                    <>
                        {hasAnimation ? (
                            <motion.div
                                id='underline'
                                layoutId='underline'
                                className='absolute left-0 -bottom-[1px] w-full h-0.5 bg-title'
                            />
                        ) : (
                            <div className='absolute left-0 -bottom-[1px] w-full h-0.5 bg-title' />
                        )}
                    </>
                )}
            </li>
        );
    }
);

TabsTab.displayName = 'TabsTab';
export default TabsTab;`;

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
    SetStateAction,
} from 'react';
import { AnimatePresence } from 'framer-motion';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    hasAnimation?: boolean;
    activeIndex?: number;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number>>;
}

const TabsPanels = forwardRef<HTMLDivElement, Props>(
    ({ hasAnimation, activeIndex, className = '', setActiveIndex = () => {}, ...props }, ref) => {
        const childrenToRender = Children.map(props.children, (child, index) => {
            if (index === activeIndex) {
                if (isValidElement(child)) {
                    return cloneElement(child as ReactElement, { hasAnimation });
                }

                return child;
            }
        });

        return (
            <div ref={ref} {...props} className={\`relative w-full \${className}\`}>
                {hasAnimation ? (
                    <AnimatePresence mode='wait' initial={false}>
                        {childrenToRender}
                    </AnimatePresence>
                ) : (
                    <>{childrenToRender}</>
                )}
            </div>
        );
    }
);

TabsPanels.displayName = 'TabsPanels';
export default TabsPanels;`;

export const TABS_PANEL_CODE = `'use client';
import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    hasAnimation?: boolean;
    className?: string;
}

export const TabsPanel = forwardRef<HTMLDivElement, Props>(({ hasAnimation, className = '', ...props }, ref) => {
    const animation: HTMLMotionProps<'div'> = {
        initial: { y: 8, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.2 } },
        exit: { y: -8, opacity: 0 },
    };

    return (
        <div ref={ref} {...props} className={\`relative w-full text-base p-2.5 sm:p-4 \${className}\`}>
            {hasAnimation ? <motion.div {...animation}>{props.children}</motion.div> : <div>{props.children}</div>}
        </div>
    );
});

TabsPanel.displayName = 'TabsPanel';
export default TabsPanel;`;
