import Link from 'next/link';
import { IDocumentationLink } from '@interfaces/Documentation';
import cn from 'classnames';

type Props = {
    link: IDocumentationLink;
    isActive: boolean;
};

export default function SidebarLink({ link, isActive }: Props) {
    const { name, href, isNew } = link;

    return (
        <Link
            href={href}
            className={cn(
                'relative flex items-center gap-2.5 w-fit font-media transition-colors duration-300 hover:text-title',
                {
                    'text-title pointer-events-none': isActive,
                    'text-text/80': !isActive,
                }
            )}
        >
            <span>{name}</span>
            {isNew && <span className='flex size-2 rounded-full bg-blue' />}

            <div
                className={cn('absolute -left-4 w-[1px] h-full bg-title transition-opacity duration-200', {
                    'opacity-100': isActive,
                    'opacity-0': !isActive,
                })}
            />
        </Link>
    );
}
