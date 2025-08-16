'use client';
import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { usePrevNextComponentPath } from '@/src/hooks';
import { Separator } from '@/src/components/ui';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
    children?: ReactNode;
};

const ComponentsHead: FC<Props> = ({ children }) => {
    const links = usePrevNextComponentPath();

    return (
        <div className='relative w-full pb-2'>
            <div className='w-full md:pr-16 mb-5 sm:mb-7 last:mb-0'>{children}</div>

            <Separator />

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
};

export default ComponentsHead;
