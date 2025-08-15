'use client';
import { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { PATHS } from '@/src/variables';
import cn from 'classnames';

type Props = {
    children?: ReactNode;
};

const RootMain: FC<Props> = ({ children }) => {
    const pathname = usePathname();

    return (
        <>
            <main className={cn('relative w-full', { 'py-7 md:py-10': pathname !== PATHS.HOME })}>{children}</main>
        </>
    );
};

export default RootMain;
