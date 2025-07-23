'use client';
import { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { PATHS } from '@/src/variables';
import { getLinks } from '@/src/helpers';
import { Sidebar } from '@/src/components/blocks';
import cn from 'classnames';

type Props = {
    children?: ReactNode;
};

const RootMain: FC<Props> = ({ children }) => {
    const pathname = usePathname();
    const { componentsLinks, dataFetchingLinks, formValidationLinks, storeLinks } = getLinks();

    const linksArr = [
        ...Object.values(componentsLinks),
        ...Object.values(dataFetchingLinks),
        ...Object.values(formValidationLinks),
        ...Object.values(storeLinks),
    ].map(({ href }) => href);

    return (
        <>
            {linksArr.includes(pathname) && <Sidebar />}
            <main className={cn('relative w-full', { 'py-7 md:py-10': pathname !== PATHS.HOME })}>{children}</main>
        </>
    );
};

export default RootMain;
