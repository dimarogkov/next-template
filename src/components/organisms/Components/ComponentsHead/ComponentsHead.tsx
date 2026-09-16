'use client';
import { ReactNode } from 'react';
import Link from 'next/link';
import { usePrevNextComponentPath } from '@hooks';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
    children?: ReactNode;
};

export const ComponentsHead = ({ children }: Props) => {
    const links = usePrevNextComponentPath();

    return (
        <div className="relative w-full pb-2">
            <div className="w-full md:pr-16">{children}</div>

            <div className="absolute top-0 right-0 hidden gap-2 md:flex">
                {links.map(({ href }, index) => (
                    <Link
                        key={href}
                        href={href}
                        className="bg-border hover:text-title flex size-7 items-center justify-center rounded-md text-base transition-colors duration-300"
                    >
                        {index === 0 ? <ChevronLeft className="size-5" /> : <ChevronRight className="size-5" />}
                    </Link>
                ))}
            </div>
        </div>
    );
};
