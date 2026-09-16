'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PATHS } from '@constants';
import { HeaderLink, HeaderLogo, HeaderSearch, HeaderSwitch } from '@components/molecules';
import cn from 'classnames';

export const Header = () => {
    const pathname = usePathname();
    const isHomePage = pathname === PATHS.HOME;

    return (
        <header
            className={cn('border-border sticky top-0 left-0 z-30 flex h-16 w-full items-center border-b lg:h-20', {
                'backdrop-blur-[20px]': isHomePage,
                'bg-bg': !isHomePage
            })}
        >
            <div className="page-container">
                <div className="flex w-full items-center justify-between">
                    <HeaderLogo />

                    <div className="flex items-center gap-2">
                        <ul className="hidden w-fit sm:flex">
                            <li>
                                <HeaderLink href={PATHS.DOCUMENTATION} />
                            </li>
                        </ul>

                        <HeaderSearch />
                        <HeaderSwitch />

                        <Link
                            href="https://github.com/dimarogkov/next-template"
                            target="_blank"
                            className="hover:bg-border flex size-9 items-center justify-center rounded-md transition-colors duration-300"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="text-text size-5"
                                aria-hidden="true"
                            >
                                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
