import Link from 'next/link';
import { PATHS } from '@/src/variables';
import { EnumText } from '@/src/types/enums';
import { HeaderLink } from '../elements';
import { Text } from '../ui';

const Header = () => {
    return (
        <header className='sticky top-0 left-0 z-20 flex items-center w-full h-16 lg:h-20 border-b border-gray bg-white'>
            <div className='container'>
                <div className='flex items-center justify-between w-full'>
                    <Link
                        href={PATHS.HOME}
                        className='flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-75'
                    >
                        <span className='flex items-center justify-center size-9 md:size-10 rounded-md bg-blue'>
                            <i className='text-[22px] md:text-[24px] text-white devicon-nextjs-plain' />
                        </span>

                        <Text textType={EnumText.large} className='!w-fit font-medium'>
                            Next Template
                        </Text>
                    </Link>

                    <ul className='hidden sm:flex gap-2 w-fit'>
                        {Object.values(PATHS.PAGES).map((path) => (
                            <li key={path}>
                                <HeaderLink href={path} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
