'use client';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { PATHS } from '@constants';
import cn from 'classnames';

type Props = {
    children?: ReactNode;
};

export default function RootMain({ children }: Props) {
    const pathname = usePathname();

    return (
        <>
            <main className={cn('relative w-full', { 'py-5 md:py-10': pathname !== PATHS.HOME })}>{children}</main>
        </>
    );
}
