import Link from 'next/link';
import { ILink } from '@interfaces/Link';
import { ArrowUpRight } from 'lucide-react';

type Props = {
    links: ILink[];
};

export const ComponentsLinks = ({ links }: Props) => {
    return (
        <>
            {links.length > 0 && (
                <div className="relative flex w-full flex-wrap gap-2 pt-2.5">
                    {links.map(({ href, name }) => (
                        <Link
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-border text-title flex items-center gap-1 rounded-md px-1.5 py-1 text-sm transition-opacity duration-300 hover:opacity-80"
                        >
                            <span>{name}</span>
                            <ArrowUpRight className="size-4" />
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};
