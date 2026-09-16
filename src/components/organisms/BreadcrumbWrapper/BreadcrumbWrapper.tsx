'use client';
import { usePathname } from 'next/navigation';
import { PATHS } from '@constants';
import { getLinks } from '@utils';
import { Breadcrumb } from '@components/atoms';
import cn from 'classnames';

type Props = {
    className?: string;
};

export const BreadcrumbWrapper = ({ className = '' }: Props) => {
    const pathname = usePathname();
    const { links } = getLinks();

    const pathsArr = [PATHS.DOCUMENTATION, ...links.map(({ href }) => href)];
    const isBreadcrumbVisible = pathsArr.includes(pathname);

    return (
        <>
            {isBreadcrumbVisible && (
                <section
                    className={cn(
                        'border-border bg-bg sticky top-16 left-0 z-30 h-11 w-full border-b lg:top-20',
                        className
                    )}
                >
                    <div className="page-container h-full">
                        <Breadcrumb />
                    </div>
                </section>
            )}
        </>
    );
};
