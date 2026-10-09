import Link from 'next/link';
import { IDocumentationLink } from '@interfaces/Documentation';
import { PulseDot } from '@components/atoms';
import cn from 'classnames';

type Props = {
    link: IDocumentationLink;
    isActive: boolean;
};

export const SidebarLink = ({ link, isActive }: Props) => {
    const { name, href, status } = link;

    return (
        <Link
            href={href}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
                'hover:text-title hover:bg-grey relative flex h-9 items-center gap-2.5 rounded-md px-2 transition-colors duration-300',
                {
                    'text-title bg-border pointer-events-none': isActive,
                    'text-text/80': !isActive
                }
            )}
        >
            <span>{name}</span>
            {status && <PulseDot variant={status} className="size-2" />}
        </Link>
    );
};
