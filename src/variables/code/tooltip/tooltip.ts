export const TOOLTIP_CODE = `import { TooltipWrapper } from './TooltipWrapper';
import { TooltipTrigger } from './TooltipTrigger';
import { TooltipContent } from './TooltipContent';

export const Tooltip = Object.assign(TooltipWrapper, {
	Trigger: TooltipTrigger,
	Content: TooltipContent,
});`;

export const TOOLTIP_WRAPPER_CODE = `import {
	Children,
	cloneElement,
	FC,
	forwardRef,
	HTMLAttributes,
	isValidElement,
	ReactElement,
	RefAttributes,
	useState,
} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
	className?: string;
}

export const TooltipWrapper: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			ref={ref}
			{...props}
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
			className={\`relative w-fit \${className}\`}
		>
			{Children.map(props.children, (child) => {
				if (isValidElement(child)) {
					return cloneElement(child as ReactElement, { isOpen });
				}

				return child;
			})}
		</div>
	);
});`;

export const TOOLTIP_TRIGGER_CODE = `import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
	isOpen?: boolean;
	className?: string;
}

export const TooltipTrigger: FC<Props> = forwardRef<HTMLDivElement, Props>(
	({ isOpen, className = '', ...props }, ref) => {
		return <div ref={ref} {...props} className={\`relative cursor-pointer \${className}\`} />;
	}
);`;

export const TOOLTIP_CONTENT_CODE = `import { FC, forwardRef, RefAttributes } from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { Triangle } from 'lucide-react';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
}

export const TooltipContent: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, className = '', ...props }, ref) => {
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
                        className={\`absolute left-1/2 bottom-[calc(100%+12px)] flex justify-center z-10 w-max text-sm rounded-md px-1.5 py-1 border border-border bg-title text-bg will-change-transform \${className}\`}
                    >
                        <>
                            {props.children}
                            <Triangle className='absolute -bottom-2 size-3 text-title fill-title rotate-180' />
                        </>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);`;
