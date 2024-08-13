import Link from 'next/link';
import { Subtitle } from '../../ui';

export const Header = () => {
    return (
        <header className='relative z-20 flex items-center w-full h-16 lg:h-20 border-b border-gray'>
            <div className='flex items-center justify-between w-full max-w-screen-2xl px-4 sm:px-5 m-auto'>
                <Subtitle className='flex'>
                    <Link href='/'>Logo</Link>
                </Subtitle>
            </div>
        </header>
    );
};
