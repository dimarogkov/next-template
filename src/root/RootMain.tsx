'use client';
import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { PATHS } from '@constants';
import cn from 'classnames';

type Props = {
    children?: ReactNode;
};

export const RootMain = ({ children }: Props) => {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [pathname]);

    return <main className={cn('relative w-full', { 'pt-5 md:pt-10': pathname !== PATHS.HOME })}>{children}</main>;
};
