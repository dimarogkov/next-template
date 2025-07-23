'use client';
import { Dispatch, FC, forwardRef, LiHTMLAttributes, RefAttributes, SetStateAction, useEffect } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

interface Props extends LiHTMLAttributes<HTMLLIElement>, RefAttributes<HTMLLIElement> {
    tabIndex?: number;
    activeIndex?: number;
    isActive?: boolean;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number>>;
}

const TabsTab: FC<Props> = forwardRef<HTMLLIElement, Props>(
    ({ tabIndex = 0, activeIndex, isActive, className = '', setActiveIndex = () => {}, ...props }, ref) => {
        useEffect(() => {
            isActive && setActiveIndex(tabIndex);
        }, [isActive, setActiveIndex, tabIndex]);

        return (
            <li
                ref={ref}
                {...props}
                onClick={() => setActiveIndex(tabIndex)}
                className={cn(
                    `relative w-full text-center text-base px-2.5 sm:px-3 py-1.5 border-r border-border last:border-none cursor-pointer transition-colors duration-200 ${className}`,
                    {
                        'text-title': tabIndex === activeIndex,
                    }
                )}
            >
                {props.children}

                {tabIndex === activeIndex && (
                    <motion.div
                        id='underline'
                        layoutId='underline'
                        className='absolute left-0 -bottom-[1px] w-full h-0.5 bg-title'
                    />
                )}
            </li>
        );
    }
);

TabsTab.displayName = 'TabsTab';
export default TabsTab;
