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
  useId,
  useState
} from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  align?: 'start' | 'center' | 'end';
  position?: 'bottom' | 'left' | 'right' | 'top';
  className?: string;
}

export const TooltipWrapper = forwardRef<HTMLDivElement, Props>(
  ({ align = 'center', position = 'top', className = '', ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const tooltipId = useId();

    const beforeClasses = {
      bottom: 'before:top-full before:left-0 before:h-2.5 before:w-full',
      left: 'before:top-0 before:-left-2.5 before:h-full before:w-2.5',
      right: 'before:top-0 before:-right-2.5 before:h-full before:w-2.5',
      top: 'before:bottom-full before:left-0 before:h-2.5 before:w-full'
    };

    const handleKeyDown = (key: string) => {
      if (key === 'Escape') {
        setIsOpen(false);
      }
    };

    return (
      <div
        ref={ref}
        {...props}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        onKeyDown={({ key }) => handleKeyDown(key)}
        className={cn(
          "relative w-fit before:absolute before:bg-transparent before:transition-all before:duration-200 before:content-['']",
          beforeClasses[position],
          className,
          {
            'before:visible before:opacity-100': isOpen,
            'before:invisible before:opacity-0': !isOpen
          }
        )}
      >
        {Children.map(props.children, (child) => {
          return isValidElement(child)
            ? cloneElement(child as ReactElement<Record<string, unknown>>, {
               align,
               position,
               tooltipId,
               isOpen
             })
            : child;
        })}
      </div>
    );
  }
);

TooltipWrapper.displayName = 'TooltipWrapper';`;

export const TOOLTIP_TRIGGER_CODE = `'use client';
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

TooltipTrigger.displayName = 'TooltipTrigger';`;

export const TOOLTIP_CONTENT_CODE = `'use client';
import { forwardRef, RefAttributes } from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { Triangle } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
  align?: 'start' | 'center' | 'end';
  position?: 'bottom' | 'left' | 'right' | 'top';
  tooltipId?: string;
  isOpen?: boolean;
  className?: string;
}

export const TooltipContent = forwardRef<HTMLDivElement, Props>(
  ({ align = 'center', position = 'top', tooltipId, isOpen, className = '', ...props }, ref) => {
    const isVerticalPosition = position === 'top' || position === 'bottom';
    const alignTranslate = { start: '0%', center: '-50%', end: '-100%' };
    const alignAxis = isVerticalPosition ? { x: alignTranslate[align] } : { y: alignTranslate[align] };

    const animation: HTMLMotionProps<'div'> = {
      initial: { ...alignAxis, scale: 0.95, opacity: 0 },
      animate: { ...alignAxis, scale: 1, opacity: 1, transition: { ease: [0.215, 0.61, 0.355, 1] } },
      exit: { ...alignAxis, scale: 0.95, opacity: 0 }
    };

    const blockPositionClasses = {
      bottom: 'top-[calc(100%+10px)]',
      left: 'right-[calc(100%+10px)]',
      right: 'left-[calc(100%+10px)]',
      top: 'bottom-[calc(100%+10px)]'
    };

    const blockAlignClasses = isVerticalPosition
      ? { start: 'left-0', center: 'left-1/2', end: 'left-full' }
      : { start: 'top-0', center: 'top-1/2', end: 'top-full' };

    const trianglePositionClasses = {
      bottom: '-top-2',
      left: '-right-2 rotate-90',
      right: '-left-2 rotate-270',
      top: '-bottom-2 rotate-180'
    };

    const triangleAlignClasses = isVerticalPosition
      ? { start: 'left-3', center: 'left-1/2 -translate-x-1/2', end: 'right-3' }
      : { start: 'top-3', center: 'top-1/2 -translate-y-1/2', end: 'bottom-3' };

    return (
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            id={tooltipId}
            ref={ref}
            {...props}
            {...animation}
            role="tooltip"
            className={cn(
              'border-border bg-title text-bg absolute z-10 flex w-max items-center justify-center rounded-md border px-1.5 py-1 text-sm will-change-transform',
              blockPositionClasses[position],
              blockAlignClasses[align],
              className
            )}
          >
            <>
              {props.children}

              <Triangle
                className={cn(
                  'fill-title text-title absolute size-3',
                  trianglePositionClasses[position],
                  triangleAlignClasses[align]
                )}
              />
            </>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

TooltipContent.displayName = 'TooltipContent';`;
