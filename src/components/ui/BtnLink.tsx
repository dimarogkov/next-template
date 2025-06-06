'use client';
import { AnchorHTMLAttributes, FC, forwardRef, RefAttributes } from 'react';
import Link from 'next/link';
import { HTMLMotionProps, motion } from 'framer-motion';
import { EnumBtn } from '@/src/types/enums';
import cn from 'classnames';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    target?: string;
    className?: string;
    btnType?: EnumBtn;
}

const BtnLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(
    ({ href, target, className = '', btnType = EnumBtn.default, ...props }, ref) => {
        const animation: HTMLMotionProps<'span'> = {
            whileHover: { opacity: 0.8 },
            whileTap: { scale: 0.95 },
        };

        const btnLinkClasses = {
            [EnumBtn.default as string]: 'bg-blue text-white',
            [EnumBtn.outline as string]: 'border-2 border-blue text-blue',
        };

        return (
            <Link ref={ref} href={href} target={target} {...props}>
                <motion.span
                    {...animation}
                    className={cn(
                        `flex items-center justify-center gap-2 w-full sm:w-fit sm:min-w-32 lg:min-w-36 h-10 lg:h-11 font-media px-4 rounded ${className}`,
                        btnLinkClasses[btnType]
                    )}
                >
                    {props.children}
                </motion.span>
            </Link>
        );
    }
);

BtnLink.displayName = 'BtnLink';
export default BtnLink;
