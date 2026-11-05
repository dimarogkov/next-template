'use client';
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

TabsTab.displayName = 'TabsTab';
