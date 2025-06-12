'use client';
import { AnchorHTMLAttributes, FC, forwardRef, RefAttributes } from 'react';
import Link from 'next/link';
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
        const btnLinkClasses = {
            [EnumBtn.default as string]: 'bg-blue text-white',
            [EnumBtn.outline as string]: 'border-2 border-blue text-blue',
        };

        return (
            <Link
                ref={ref}
                href={href}
                target={target}
                {...props}
                className={cn(
                    `flex items-center justify-center gap-1.5 w-full sm:w-fit h-10 font-media px-4 rounded-md transition-all duration-300 will-change-transform active:scale-95 ${className}`,
                    btnLinkClasses[btnType],
                    {
                        'hover:bg-gray': btnType === EnumBtn.ghost,
                        'hover:opacity-80': btnType !== EnumBtn.ghost,
                    }
                )}
            >
                {props.children}
            </Link>
        );
    }
);

BtnLink.displayName = 'BtnLink';
export default BtnLink;
