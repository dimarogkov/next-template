'use client';
import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
}

export const TooltipTrigger = forwardRef<HTMLDivElement, Props>(({ isOpen, className = '', ...props }, ref) => {
    return <div ref={ref} {...props} className={cn('relative cursor-pointer', className)} />;
});

TooltipTrigger.displayName = 'TooltipTrigger';
