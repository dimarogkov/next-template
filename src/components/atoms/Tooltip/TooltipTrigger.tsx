'use client';
import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    align?: 'start' | 'center' | 'end';
    position?: 'bottom' | 'left' | 'right' | 'top';
    tooltipId?: string;
    isOpen?: boolean;
    className?: string;
}

export const TooltipTrigger = forwardRef<HTMLDivElement, Props>(
    ({ align, position, tooltipId, isOpen, className = '', ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                aria-describedby={tooltipId}
                className={cn('relative cursor-pointer', className)}
            />
        );
    }
);

TooltipTrigger.displayName = 'TooltipTrigger';
