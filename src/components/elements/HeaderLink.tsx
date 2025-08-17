'use client';
import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PATHS } from '@/src/variables';
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
                `flex items-center justify-center gap-2 w-full sm:w-fit h-9 font-media px-3 rounded-md transition-colors duration-300`,
                {
                    'text-title pointer-events-none': isActive,
                    'hover:bg-border': !isActive,
                    'text-title': pathname === PATHS.HOME,
                }
            )}
        >
            {convertUrlToString(href)}
        </Link>
    );
};

export default HeaderLink;
