import Link from 'next/link';
import { PATHS } from '@constants';
import { Text } from '@components/atoms';

export default function HeaderLogo() {
    return (
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
    );
}
