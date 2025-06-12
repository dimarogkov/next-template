'use client';
import { FC, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PATHS } from '@/src/variables';
import { convertUrlToString } from '@/src/helpers';
import { Text } from '../ui';
import { ChevronRight } from 'lucide-react';

type Props = {
    className?: string;
};

const Breadcrumbs: FC<Props> = ({ className = '' }) => {
    const paths = usePathname();
    const isBreadcrumbVisible = Object.values(PATHS.PAGES).includes(paths);

    const pathNames = paths
        .split('/')
        .filter((path) => path)
        .map((path, index, arr) => ({
            id: crypto.randomUUID(),
            href: `/${arr.slice(0, index + 1).join('/')}`,
            text: convertUrlToString(path),
        }));

    const breadcrumbs = useMemo(
        () => [{ id: crypto.randomUUID(), href: `${PATHS.HOME}`, text: 'Home' }, ...pathNames],
        [pathNames]
    );

    return (
        isBreadcrumbVisible && (
            <section
                className={`sticky z-10 top-16 lg:top-20 left-0 w-full h-11 border-b border-gray bg-white ${className}`}
            >
                <div className='container h-full'>
                    <ul className='flex items-center gap-1 w-full h-full'>
                        {breadcrumbs.map(({ id, href, text }, index) => (
                            <li key={id}>
                                {breadcrumbs.length - 1 !== index ? (
                                    <Link href={href} className='flex items-center line-clamp-1 hover:underline'>
                                        <span>{text}</span>
                                        <ChevronRight className='size-5 min-w-5 stroke-1 text-black' />
                                    </Link>
                                ) : (
                                    <Text className='line-clamp-1 text-blue'>{text}</Text>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        )
    );
};

export default Breadcrumbs;
