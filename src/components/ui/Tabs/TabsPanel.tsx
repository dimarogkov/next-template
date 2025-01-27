'use client';
import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    panelIndex?: number;
    activeIndex?: number;
    className?: string;
}

const TabsPanel: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ panelIndex = 0, activeIndex, className = '', ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                hidden={panelIndex !== activeIndex}
                className={cn(`relative w-full text-base p-2.5 sm:p-4 rounded-md border border-gray ${className}`, {
                    'rounded-ss-none': panelIndex === 0,
                })}
            >
                {props.children}
            </div>
        );
    }
);

TabsPanel.displayName = 'TabsPanel';
export default TabsPanel;
