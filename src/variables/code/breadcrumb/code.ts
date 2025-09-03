export const BREADCRUMB_HELPERS_CODE = `export const convertUrlToString = (url: string) => {
    const decoded = decodeURIComponent(url);
    const normalized = decoded.replace(/[_/]/g, ' ');

    return normalized
        .split(/[\s-]+/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};`;

export const BREADCRUMB_CODE = `'use client';
import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PATHS } from '@/src/variables';
import { convertUrlToString, getLinks } from '@/src/helpers';
import { ChevronRight } from 'lucide-react';

type Props = {
    className?: string;
};

const Breadcrumb: FC<Props> = ({ className = '' }) => {
    const pathname = usePathname();
    const { componentsLinks, dataFetchingLinks, formValidationLinks, storeLinks } = getLinks();
    const { MAIN } = PATHS.PAGES;

    const pathsArr = [
        ...Object.values(MAIN),
        ...componentsLinks.map(({ href }) => href),
        ...dataFetchingLinks.map(({ href }) => href),
        ...formValidationLinks.map(({ href }) => href),
        ...storeLinks.map(({ href }) => href),
    ];

    const isBreadcrumbVisible = pathsArr.includes(pathname);

    const links = pathname.split('/').map((link) => ({
        id: crypto.randomUUID(),
        href: \`/\${link}\`,
        name: link ? convertUrlToString(link) : 'Home',
    }));

    return (
        <>
            {isBreadcrumbVisible && (
                <section
                    className={\`sticky z-20 top-16 lg:top-20 left-0 w-full h-11 border-b border-border bg-bg \${className}\`}
                >
                    <div className='container h-full'>
                        <ul className='flex items-center gap-1 w-full h-full'>
                            {links.map(({ id, href, name }, index) => (
                                <li key={id}>
                                    {links.length - 1 !== index ? (
                                        <Link href={href} className='flex items-center line-clamp-1 hover:underline'>
                                            <span className='line-clamp-1'>{name}</span>
                                            <ChevronRight className='size-5 min-w-5 stroke-1 text-text' />
                                        </Link>
                                    ) : (
                                        <span className='line-clamp-1 text-title'>{name}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}
        </>
    );
};

export default Breadcrumb;`;
