import Link from 'next/link';
import { PATHS } from '@/src/variables';
import { HeaderLink, HeaderSwitch } from '@/src/components/elements';
import { Text } from '@/src/components/ui';
import { Github } from 'lucide-react';

const Header = () => {
    const { MAIN } = PATHS.PAGES;

    return (
        <header className='sticky top-0 left-0 z-20 flex items-center w-full h-16 lg:h-20 border-b border-border bg-bg'>
            <div className='container'>
                <div className='flex items-center justify-between w-full'>
                    <Link
                        href={PATHS.HOME}
                        className='flex items-center gap-2 sm:gap-2.5 transition-opacity duration-300 hover:opacity-75'
                    >
                        <span className='flex items-center justify-center size-8 sm:size-9 rounded-md bg-title'>
                            <i className='text-[24px] md:text-[28px] text-bg devicon-nextjs-plain' />
                        </span>

                        <Text size='large' className='!w-fit font-medium text-title select-none'>
                            Next Template
                        </Text>
                    </Link>

                    <div className='flex items-center gap-2.5'>
                        <ul className='hidden sm:flex w-fit'>
                            <li>
                                <HeaderLink href={MAIN.DOCUMENTATION} />
                            </li>
                        </ul>

                        <Link
                            href='https://github.com/dimarogkov/next-template'
                            target='_blank'
                            className='flex items-center justify-center size-8 rounded-md transition-colors duration-300 hover:bg-border'
                        >
                            <Github className='size-5 text-text' />
                        </Link>

                        <HeaderSwitch />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
