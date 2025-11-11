'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PATHS } from '@constants';
import { HeaderLink, HeaderLogo, HeaderSearch, HeaderSwitch } from '@components/molecules';
import { Github } from 'lucide-react';
import cn from 'classnames';

export default function Header() {
    const pathname = usePathname();
    const isHomePage = pathname === PATHS.HOME;

    return (
        <header
            className={cn('sticky top-0 left-0 z-30 flex items-center w-full h-16 lg:h-20 border-b border-border', {
                'backdrop-blur-[20px]': isHomePage,
                'bg-bg': !isHomePage,
            })}
        >
            <div className='container'>
                <div className='flex items-center justify-between w-full'>
                    <HeaderLogo />

                    <div className='flex items-center gap-2'>
                        <ul className='hidden sm:flex w-fit'>
                            <li>
                                <HeaderLink href={PATHS.DOCUMENTATION} />
                            </li>
                        </ul>

                        <HeaderSearch />
                        <HeaderSwitch />

                        <Link
                            href='https://github.com/dimarogkov/next-template'
                            target='_blank'
                            className='flex items-center justify-center size-9 rounded-md transition-colors duration-300 hover:bg-border'
                        >
                            <Github className='size-5 text-text' />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
