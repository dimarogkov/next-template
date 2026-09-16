import Link from 'next/link';
import { PATHS } from '@constants';
import { Text } from '@components/atoms';

export const HeaderLogo = () => {
    return (
        <Link
            href={PATHS.HOME}
            className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-75 sm:gap-2.5"
        >
            <span className="bg-title flex size-8 items-center justify-center rounded-md sm:size-9">
                <i className="devicon-nextjs-plain text-bg text-[24px] md:text-[28px]" />
            </span>

            <Text size="large" className="text-title w-fit! font-medium select-none">
                Next Template
            </Text>
        </Link>
    );
};
