'use client';
import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
}

const TooltipTrigger: FC<Props> = forwardRef<HTMLDivElement, Props>(({ isOpen, className = '', ...props }, ref) => {
    return <div ref={ref} {...props} className={`relative cursor-pointer ${className}`} />;
});

TooltipTrigger.displayName = 'TooltipTrigger';
export default TooltipTrigger;
