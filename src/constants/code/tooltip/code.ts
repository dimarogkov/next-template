export const TOOLTIP_CODE = `import { TooltipWrapper } from './TooltipWrapper';
import { TooltipTrigger } from './TooltipTrigger';
import { TooltipContent } from './TooltipContent';

export const Tooltip = Object.assign(TooltipWrapper, {
  Trigger: TooltipTrigger,
  Content: TooltipContent
});`;

export const TOOLTIP_WRAPPER_CODE = `'use client';
import {
  Children,
  cloneElement,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  RefAttributes,
  useState
} from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  className?: string;
}

export const TooltipWrapper = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      ref={ref}
      {...props}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={cn(
        "relative w-fit before:absolute before:bottom-full before:left-0 before:h-2.5 before:w-full before:bg-transparent before:transition-all before:duration-200 before:content-['']",
        className,
        {
          'before:visible before:opacity-100': isOpen,
          'before:invisible before:opacity-0': !isOpen
        }
      )}
    >
      {Children.map(props.children, (child) => {
        return isValidElement(child) ? cloneElement(child as ReactElement<any>, { isOpen }) : child;
      })}
    </div>
  );
});

TooltipWrapper.displayName = 'TooltipWrapper';`;

export const TOOLTIP_TRIGGER_CODE = `'use client';
import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  isOpen?: boolean;
  className?: string;
}

export const TooltipTrigger = forwardRef<HTMLDivElement, Props>(({ isOpen, className = '', ...props }, ref) => {
  return <div ref={ref} {...props} className={cn('relative cursor-pointer', className)} />;
});

TooltipTrigger.displayName = 'TooltipTrigger';`;

export const TOOLTIP_CONTENT_CODE = `'use client';
import { forwardRef, RefAttributes } from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { Triangle } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
  isOpen?: boolean;
  className?: string;
}

export const TooltipContent = forwardRef<HTMLDivElement, Props>(({ isOpen, className = '', ...props }, ref) => {
  const animation: HTMLMotionProps<'div'> = {
    initial: { x: '-50%', scale: 0.95, opacity: 0 },
    animate: { x: '-50%', scale: 1, opacity: 1, transition: { ease: [0.215, 0.61, 0.355, 1] } },
    exit: { x: '-50%', scale: 0.95, opacity: 0 }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          ref={ref}
          {...props}
          {...animation}
          className={cn(
            'border-border bg-title text-bg absolute bottom-[calc(100%+10px)] left-1/2 z-10 flex w-max justify-center rounded-md border px-1.5 py-1 text-sm will-change-transform',
            className
          )}
        >
          <>
            {props.children}
            <Triangle className="fill-title text-title absolute -bottom-2 size-3 rotate-180" />
          </>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

TooltipContent.displayName = 'TooltipContent';`;
