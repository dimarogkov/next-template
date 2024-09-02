import Link from 'next/link';
import { Subtitle } from '../ui';
import { Braces } from 'lucide-react';

const Header = () => {
    return (
        <header className='sticky top-0 left-0 z-20 flex items-center w-full h-16 lg:h-20 border-b border-gray bg-white'>
            <div className='flex items-center justify-between w-full max-w-screen-2xl px-4 sm:px-5 m-auto'>
                <Subtitle className='flex'>
                    <Link href='/' className='flex items-center gap-4 transition-opacity duration-300 hover:opacity-75'>
                        <span className='flex items-center justify-center w-10 h-10 rounded-full bg-gray'>
                            <Braces className='w-5 h-5 text-black' />
                        </span>

                        <span>Next Template</span>
                    </Link>
                </Subtitle>
            </div>
        </header>
    );
};

export default Header;
