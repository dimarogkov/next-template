'use client';
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

TabsTab.displayName = 'TabsTab';
