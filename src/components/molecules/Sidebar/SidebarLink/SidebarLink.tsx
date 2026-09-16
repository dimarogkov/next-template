import Link from 'next/link';
import { IDocumentationLink } from '@interfaces/Documentation';
import cn from 'classnames';

type Props = {
    link: IDocumentationLink;
    isActive: boolean;
};

export const SidebarLink = ({ link, isActive }: Props) => {
    const { name, href, isNew } = link;

    return (
        <Link
            href={href}
            className={cn(
                'hover:text-title relative flex w-fit items-center gap-2.5 font-medium transition-colors duration-300',
                {
                    'text-title pointer-events-none': isActive,
                    'text-text/80': !isActive
                }
            )}
        >
            <span>{name}</span>
            {isNew && <span className="bg-blue flex size-2 rounded-full" />}

            <div
                className={cn('bg-title absolute -left-4 h-full w-px transition-opacity duration-200', {
                    'opacity-100': isActive,
                    'opacity-0': !isActive
                })}
            />
        </Link>
    );
};
