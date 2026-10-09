'use client';
import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';

type Props = {
    children?: ReactNode;
};

export const RootMain = ({ children }: Props) => {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [pathname]);

    return <main className="relative w-full">{children}</main>;
};
