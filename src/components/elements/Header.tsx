import Link from 'next/link';
import { EnumTitle } from '@/src/types/enums/Title';
import { PATHS } from '@/src/variables/paths';

import { Title } from '../ui';
import { Braces } from 'lucide-react';

const Header = () => {
    return (
        <header className='sticky top-0 left-0 z-20 flex items-center w-full h-16 lg:h-20 border-b border-gray bg-white'>
            <div className='flex items-center justify-between w-full max-w-screen-2xl px-4 sm:px-5 m-auto'>
                <Title titleType={EnumTitle.h3} className='flex'>
                    <Link
                        href={PATHS.HOME}
                        className='flex items-center gap-4 transition-opacity duration-300 hover:opacity-75'
                    >
                        <span className='flex items-center justify-center size-10 rounded-full bg-gray'>
                            <Braces className='size-5 text-black' />
                        </span>

                        <span>Next Template</span>
                    </Link>
                </Title>
            </div>
        </header>
    );
};

export default Header;
