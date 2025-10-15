'use client';
import { ReactNode } from 'react';
import Link from 'next/link';
import { usePrevNextComponentPath } from '@hooks';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
    children?: ReactNode;
};

export default function ComponentsHead({ children }: Props) {
    const links = usePrevNextComponentPath();

    return (
        <div className='relative w-full pb-2'>
            <div className='w-full md:pr-16'>{children}</div>

            <div className='absolute top-0 right-0 flex gap-2'>
                {links.map(({ href }, index) => (
                    <Link
                        key={href}
                        href={href}
                        className='flex items-center justify-center size-7 text-base rounded-md bg-border transition-colors duration-300 hover:text-title'
                    >
                        {index === 0 ? <ChevronLeft className='size-5' /> : <ChevronRight className='size-5' />}
                    </Link>
                ))}
            </div>
        </div>
    );
}
