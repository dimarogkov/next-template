import { FC } from 'react';
import Link from 'next/link';
import cn from 'classnames';

type Props = {
    link: {
        name: string;
        href: string;
    };
    isActive: boolean;
};

const SidebarLink: FC<Props> = ({ link, isActive }) => {
    const { name, href } = link;

    return (
        <Link
            href={href}
            className={cn('relative flex w-fit font-media transition-all duration-300 hover:text-title hover:pl-0.5', {
                'text-title pointer-events-none': isActive,
                'text-text/80': !isActive,
            })}
        >
            <span>{name}</span>

            <div
                className={cn('absolute -left-4 w-[1px] h-full bg-title transition-opacity duration-200', {
                    'opacity-100': isActive,
                    'opacity-0': !isActive,
                })}
            />
        </Link>
    );
};

export default SidebarLink;
