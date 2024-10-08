import { AnchorHTMLAttributes, forwardRef, RefAttributes } from 'react';
import Link from 'next/link';
import { EnumBtn } from '@/src/types/enums';
import cn from 'classnames';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    className?: string;
    btnType?: string;
}

const BtnLink: React.FC<Props> = forwardRef<HTMLAnchorElement, Props>(
    ({ href, className = '', btnType = EnumBtn.default, ...props }, ref) => (
        <Link
            ref={ref}
            {...props}
            href={href}
            className={cn(
                `flex items-center justify-center w-full sm:w-fit sm:min-w-32 lg:min-w-36 h-10 lg:h-11 font-media px-4 rounded transition-opacity duration-300 hover:opacity-80 ${className}`,
                {
                    'bg-blue text-white': btnType === EnumBtn.default,
                    'border-2 border-blue text-blue': btnType === EnumBtn.outline,
                    'bg-black/25 text-white': btnType === EnumBtn.disabled,
                }
            )}
        />
    )
);

BtnLink.displayName = 'BtnLink';
export default BtnLink;
