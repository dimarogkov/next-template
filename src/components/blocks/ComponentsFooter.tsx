'use client';
import Link from 'next/link';
import { usePrevNextComponentPath } from '@/src/hooks';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ComponentsFooter = () => {
    const { prevPath, nextPath } = usePrevNextComponentPath();

    return (
        <div className='relative flex flex-wrap justify-between gap-2.5 w-full pt-4 md:pt-5'>
            {[prevPath, nextPath].map(({ href, name }, index) => (
                <Link
                    key={href}
                    href={href}
                    className='flex items-center justify-center gap-0.5 w-full sm:w-fit h-8 font-media text-base px-3 rounded-md bg-border transition-colors duration-300 hover:text-title'
                >
                    {index === 0 && <ChevronLeft className='size-5' />}
                    <span>{name}</span>
                    {index === 1 && <ChevronRight className='size-5' />}
                </Link>
            ))}
        </div>
    );
};

export default ComponentsFooter;
