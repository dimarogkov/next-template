'use client';
import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { convertUrlToString } from '@/src/helpers';
import cn from 'classnames';

type Props = {
    href: string;
};

const HeaderLink: FC<Props> = ({ href }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={cn(
                `flex items-center justify-center gap-2 w-full sm:w-fit h-8 font-media px-2.5 rounded-md transition-colors duration-300`,
                {
                    'text-title pointer-events-none': isActive,
                    'hover:bg-border': !isActive,
                }
            )}
        >
            {convertUrlToString(href)}
        </Link>
    );
};

export default HeaderLink;
