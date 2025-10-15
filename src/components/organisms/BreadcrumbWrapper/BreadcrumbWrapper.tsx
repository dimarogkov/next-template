'use client';
import { usePathname } from 'next/navigation';
import { PATHS } from '@constants';
import { getLinks } from '@utils';
import { Breadcrumb } from '@components/atoms';

type Props = {
    className?: string;
};

export default function BreadcrumbWrapper({ className = '' }: Props) {
    const pathname = usePathname();
    const { links } = getLinks();

    const pathsArr = [PATHS.DOCUMENTATION, ...links.map(({ href }) => href)];
    const isBreadcrumbVisible = pathsArr.includes(pathname);

    return (
        <>
            {isBreadcrumbVisible && (
                <section
                    className={`sticky z-20 top-16 lg:top-20 left-0 w-full h-11 border-b border-border bg-bg ${className}`}
                >
                    <div className='container h-full'>
                        <Breadcrumb />
                    </div>
                </section>
            )}
        </>
    );
}
