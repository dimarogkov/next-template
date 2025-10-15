export const TOOLTIP_CODE = `import TooltipWrapper from './TooltipWrapper';
import TooltipTrigger from './TooltipTrigger';
import TooltipContent from './TooltipContent';

export const Tooltip = Object.assign(TooltipWrapper, {
    Trigger: TooltipTrigger,
    Content: TooltipContent,
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
    useState,
} from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const TooltipWrapper = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            ref={ref}
            {...props}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className={cn(
                \`relative w-fit before:absolute before:content-[''] before:left-0 before:bottom-full before:w-full before:h-2.5 before:bg-transparent before:transition-all before:duration-200 \${className}\`,
                {
                    'before:opacity-100 before:visible': isOpen,
                    'before:opacity-0 before:invisible': !isOpen,
                }
            )}
        >
            {Children.map(props.children, (child) => {
                if (isValidElement(child)) {
                    return cloneElement(child as ReactElement, { isOpen });
                }

                return child;
            })}
        </div>
    );
});

TooltipWrapper.displayName = 'TooltipWrapper';
export default TooltipWrapper;`;

export const TOOLTIP_TRIGGER_CODE = `'use client';
import { forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
}

const TooltipTrigger = forwardRef<HTMLDivElement, Props>(({ isOpen, className = '', ...props }, ref) => {
    return <div ref={ref} {...props} className={\`relative cursor-pointer \${className}\`} />;
});

TooltipTrigger.displayName = 'TooltipTrigger';
export default TooltipTrigger;`;

export const TOOLTIP_CONTENT_CODE = `'use client';
import { forwardRef, RefAttributes } from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { Triangle } from 'lucide-react';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
}

const TooltipContent = forwardRef<HTMLDivElement, Props>(({ isOpen, className = '', ...props }, ref) => {
    const animation: HTMLMotionProps<'div'> = {
        initial: { x: '-50%', scale: 0.95, opacity: 0 },
        animate: { x: '-50%', scale: 1, opacity: 1, transition: { ease: [0.215, 0.61, 0.355, 1] } },
        exit: { x: '-50%', scale: 0.95, opacity: 0 },
    };

    return (
        <AnimatePresence mode='wait'>
            {isOpen && (
                <motion.div
                    ref={ref}
                    {...props}
                    {...animation}
                    className={\`absolute left-1/2 bottom-[calc(100%+10px)] flex justify-center z-10 w-max text-sm rounded-md px-1.5 py-1 border border-border bg-title text-bg will-change-transform \${className}\`}
                >
                    <>
                        {props.children}
                        <Triangle className='absolute -bottom-2 size-3 text-title fill-title rotate-180' />
                    </>
                </motion.div>
            )}
        </AnimatePresence>
    );
});

TooltipContent.displayName = 'TooltipContent';
export default TooltipContent;`;
