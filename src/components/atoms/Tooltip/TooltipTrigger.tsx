'use client';
import { cloneElement, forwardRef, HTMLAttributes, isValidElement, ReactElement, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    align?: 'start' | 'center' | 'end';
    position?: 'bottom' | 'left' | 'right' | 'top';
    tooltipId?: string;
    isOpen?: boolean;
    className?: string;
}

export const TooltipTrigger = forwardRef<HTMLDivElement, Props>(
    ({ align, position, tooltipId, isOpen, className = '', children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                aria-describedby={!isValidElement(children) ? tooltipId : undefined}
                className={cn('relative cursor-pointer', className)}
            >
                {isValidElement(children)
                    ? cloneElement(children as ReactElement<Record<string, unknown>>, {
                          'aria-describedby': tooltipId
                      })
                    : children}
            </div>
        );
    }
);

TooltipTrigger.displayName = 'TooltipTrigger';
