'use client';
import Link from 'next/link';
import { useMain, usePrevNextComponentPath } from '@hooks';
import { Text } from '@components/atoms';
import { AlignJustify, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ComponentsFooter() {
    const { setIsSidebarOpen } = useMain();
    const links = usePrevNextComponentPath();

    const openSidebar = () => setIsSidebarOpen(true);

    return (
        <div className='fixed bottom-0 left-0 md:relative z-10 flex justify-between w-full px-5 md:px-0 py-4 md:py-0 md:pt-5 border-t border-border md:border-none bg-bg'>
            <button
                onClick={openSidebar}
                className='flex md:hidden items-center justify-center gap-1.5 w-fit h-8 px-3 rounded-md bg-border transition-colors duration-300 hover:text-title'
            >
                <Text className='!w-fit'>Menu</Text>
                <AlignJustify className='size-5' />
            </button>

            <div className='flex md:justify-between gap-2 md:gap-2.5 w-fit md:w-full'>
                {links.map(({ href, name }, index) => (
                    <Link
                        key={href}
                        href={href}
                        className='flex items-center justify-center md:gap-0.5 size-8 md:w-fit md:h-8 font-media text-base md:px-3 rounded-md bg-border transition-colors duration-300 hover:text-title'
                    >
                        {index === 0 && <ChevronLeft className='size-5' />}

                        <span className='hidden md:block line-clamp-1'>{name}</span>

                        {index === 1 && <ChevronRight className='size-5' />}
                    </Link>
                ))}
            </div>
        </div>
    );
}
