'use client';
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
                    `relative w-full text-center text-base px-2.5 sm:px-3 py-1.5 border-r border-border last:border-none cursor-pointer ${className}`,
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
export default TabsTab;
