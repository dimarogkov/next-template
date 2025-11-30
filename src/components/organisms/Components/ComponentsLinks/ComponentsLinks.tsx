import Link from 'next/link';
import { ILink } from '@interfaces/Link';
import { ArrowUpRight } from 'lucide-react';

type Props = {
    links: ILink[];
};

export default function ComponentsLinks({ links }: Props) {
    return (
        links.length > 0 && (
            <div className='relative flex flex-wrap gap-2.5 w-full pb-4 md:pb-5 pt-1'>
                {links.map(({ href, name }) => (
                    <Link
                        key={name}
                        href={href}
                        target='blank'
                        className='flex items-center gap-1 text-sm text-title px-2 py-0.5 rounded-full bg-border transition-opacity duration-300 hover:opacity-80'
                    >
                        <span>{name}</span>
                        <ArrowUpRight className='size-4' />
                    </Link>
                ))}
            </div>
        )
    );
}
