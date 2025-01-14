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
                {...props}
                href={href}
                target={target}
                className={cn(
                    `flex items-center justify-center gap-2 w-full sm:w-fit sm:min-w-32 lg:min-w-36 h-10 lg:h-11 font-media px-4 rounded transition-opacity duration-300 hover:opacity-80 ${className}`,
                    btnLinkClasses[btnType]
                )}
            />
        );
    }
);

BtnLink.displayName = 'BtnLink';
export default BtnLink;
